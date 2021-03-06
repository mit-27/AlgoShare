import React from 'react';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { WebSocketLink } from "@apollo/client/link/ws";
import { SubscriptionClient } from 'subscriptions-transport-ws'
// import fetch from 'isomorphic-unfetch';

let apolloClient = null;

export function withApollo(PageComponent, { ssr = true } = {}) {
    const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
        const client = apolloClient || initApolloClient(apolloState);
        return (
            <ApolloProvider client={client}>
                <PageComponent {...pageProps} />
            </ApolloProvider>
        );
    };

    // Set the correct displayName in development
    if (process.env.NODE_ENV !== 'production') {
        const displayName = PageComponent.displayName || PageComponent.name || 'Component';

        if (displayName === 'App') {
            console.warn('This withApollo HOC only works with PageComponents.');
        }

        WithApollo.displayName = `withApollo(${displayName})`;
    }

    if (ssr || PageComponent.getInitialProps) {
        WithApollo.getInitialProps = async (ctx) => {
            const { AppTree } = ctx;

            // Initialize ApolloClient, add it to the ctx object so
            // we can use it in `PageComponent.getInitialProp`.
            const apolloClient = (ctx.apolloClient = initApolloClient());

            // Run wrapped getInitialProps methods
            let pageProps = {};
            if (PageComponent.getInitialProps) {
                pageProps = await PageComponent.getInitialProps(ctx);
            }

            // Only on the server:
            if (typeof window === 'undefined') {
                // When redirecting, the response is finished.
                // No point in continuing to render
                if (ctx.res && ctx.res.finished) {
                    return pageProps;
                }

                // Only if ssr is enabled
                if (ssr) {
                    try {
                        // Run all GraphQL queries
                        const { getDataFromTree } = await import('@apollo/client/react/ssr/getDataFromTree');
                        await getDataFromTree(
                            <AppTree
                                pageProps={{
                                    ...pageProps,
                                    apolloClient
                                }}
                            />
                        );
                    } catch (error) {
                        // Prevent Apollo Client GraphQL errors from crashing SSR.
                        // Handle them in components via the data.error prop:
                        // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                        console.error('Error while running `getDataFromTree`', error);
                    }

                    // getDataFromTree does not call componentWillUnmount
                    // head side effect therefore need to be cleared manually
                    // Head.rewind();
                }
            }

            // Extract query data from the Apollo store
            const apolloState = apolloClient.cache.extract();

            return {
                ...pageProps,
                apolloState
            };
        };
    }

    return WithApollo;
}

// export const withApollo = ({ ssr = true } = {}) => (PageComponent) => {
//     const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
//         let client;
//         if (apolloClient) {
//             // Happens on: getDataFromTree & next.js ssr
//             client = apolloClient;
//         } else {
//             // Happens on: next.js csr
//             // client = initApolloClient(apolloState, undefined);
//             client = initApolloClient(apolloState, {});
//         }

//         return (
//             <ApolloProvider client={client}>
//                 <PageComponent {...pageProps} />
//             </ApolloProvider>
//         );
//     };

//     // Set the correct displayName in development
//     if (process.env.NODE_ENV !== 'production') {
//         const displayName =
//             PageComponent.displayName || PageComponent.name || 'Component';
//         WithApollo.displayName = `withApollo(${displayName})`;
//     }
//     if (ssr || PageComponent.getInitialProps) {
//         WithApollo.getInitialProps = async (ctx) => {
//             const { AppTree } = ctx

//             // Initialize ApolloClient, add it to the ctx object so
//             // we can use it in `PageComponent.getInitialProp`.
//             const apolloClient = (ctx.apolloClient = initApolloClient(null))

//             // Run wrapped getInitialProps methods
//             let pageProps = {}
//             if (PageComponent.getInitialProps) {
//                 pageProps = await PageComponent.getInitialProps(ctx)
//             }

//             // Only on the server:
//             if (typeof window === 'undefined') {
//                 // When redirecting, the response is finished.
//                 // No point in continuing to render
//                 if (ctx.res && ctx.res.finished) {
//                     return pageProps
//                 }

//                 // Only if ssr is enabled
//                 if (ssr) {
//                     try {
//                         // Run all GraphQL queries
//                         const { getDataFromTree } = await import('@apollo/client/react/ssr/getDataFromTree')
//                         await getDataFromTree(
//                             <AppTree
//                                 pageProps={{
//                                     ...pageProps,
//                                     apolloClient
//                                 }}
//                             />
//                         )
//                     } catch (error) {
//                         // Prevent Apollo Client GraphQL errors from crashing SSR.
//                         // Handle them in components via the data.error prop:
//                         // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
//                         console.error('Error while running `getDataFromTree`', error)
//                     }

//                     // getDataFromTree does not call componentWillUnmount
//                     // head side effect therefore need to be cleared manually
//                     // Head.rewind()
//                 }
//             }

//             // Extract query data from the Apollo store
//             const apolloState = apolloClient.cache.extract()

//             return {
//                 ...pageProps,
//                 apolloState
//             }
//         }
//     }

//     return WithApollo;
// };

function initApolloClient(initialState) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (typeof window === 'undefined') {
        return createApolloClient(initialState);
    }

    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = createApolloClient(initialState);
    }

    return apolloClient;
}

const createHttpLink = () => {
    const httpLink = new HttpLink({
        uri: process.env.HASURA_HTTP_URL,
        credentials: 'include',
        headers: {
            "content-type": "application/json",
            "x-hasura-admin-secret": process.env.HASURA_SECRET,
            Authorization: "secret",
            //   authorization: accessToken ? `Bearer ${accessToken}` : '',
        },

    })
    return httpLink;
}

const createWSLink = () => {
    return new WebSocketLink(
        new SubscriptionClient(process.env.HASURA_WSS_URL, {
            lazy: true,
            reconnect: true,
            connectionParams: {
                //   await requestAccessToken() // happens on the client
                //   return {
                headers: {
                    "content-type": "application/json",
                    "x-hasura-admin-secret": process.env.HASURA_SECRET,
                    Authorization: "secret",
                    //   authorization: accessToken ? `Bearer ${accessToken}` : '',
                },
                //   }
            },
        })
    )
}

function createApolloClient(initialState = {}) {
    const ssrMode = typeof window === 'undefined'
    let link
    if (ssrMode) {
        link = createHttpLink()
    } else {
        link = createWSLink()
    }
    return new ApolloClient({
        ssrMode,
        link,
        cache: new InMemoryCache().restore(initialState),
    })
}
