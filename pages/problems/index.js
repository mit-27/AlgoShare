/* eslint react/prop-types: 0 */


import { Box, Flex, Heading, Text, Button, Container, Spinner } from '@chakra-ui/react';
<<<<<<< HEAD
// import { useState } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 0fdecae7565cb925b407974690189dd55c0c55c9
import Layout from '../../components/Layout'
import QuestionCard from '../../components/QuestionCard';
import EmptySearch from '../../components/EmptySearch';
import { withApollo } from '../../graphql/apollo'
import { GET_CODE_QUESTIONS, GET_CODE_QUESTIONS_SUBSCRIPTION } from '../../graphql/queries'
import { useSubscription } from '@apollo/client'
import { useSearch } from '../../utils/search';

const problems = () => {
    // const [loading, setLoading] = useState(true)

    const { data, loading, error } = useSubscription(GET_CODE_QUESTIONS_SUBSCRIPTION)
    const { search, platformFilters } = useSearch();

    const allQuestions = data ? data.code_questions : []
    // const allQuestions = []

    const matchesSearch = (question) => question.question.toLowerCase().includes(search.toLowerCase());
    const matchesPlatform = (question) => question.platforms.some(p => platformFilters.includes(p));

    // const matchesPlatform = (question) => platformFilters.includes(question.platforms[0]);
    const filteredQuestions = allQuestions.filter(matchesSearch).filter(matchesPlatform)
    // .filter(matchesAlcoholType);

    // if (error) { console.log("Error MSg : ", error.message) }


    return (
        <Layout width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
            {loading ? (
                <Flex pt={24} align="center" justify="center">
                    <Spinner size="xl" label="Loading Deals" />
                </Flex>
            ) : (
                <>

                    {filteredQuestions.length ? (
                        filteredQuestions.map((question) => <QuestionCard answersCount={question.code_answers_aggregate.aggregate.count} userName={question.user.name} key={question.id} platforms={question.platforms} question={question.question} />)
                    )
                        :
                        (
                            <EmptySearch resultName="" resultDetails="" />
                        )
                    }
                    {/* <QuestionCard plaformName="HACKERRANK" question="Longest Substring Without Repeating Characters" /> */}
                    {/* {filteredDeals.length ? (
                        filteredDeals.map((deal) => <DealCard key={deal.id} userId={userId} {...deal} />)
                    ) : (
                        <EmptySearch />
                    )}
                    <Flex justify="flex-end" as="i" color="gray.500">
                        {`Showing ${filteredDeals.length} out of ${allDeals.length} deals in Des Moines`}
                    </Flex>
                    <Flex mt={8} display={['block', 'none', 'none', 'none']}>
                        <AddDealModal />
                    </Flex> */}
                </>
            )}
        </Layout>
    )
}

export default withApollo(problems, { ssr: false })