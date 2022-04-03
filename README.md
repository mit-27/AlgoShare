# Project Introduction

AlgoShare which means sharing algorithms of coding problems. It is an open-source and MIT license website. It is a platform to ask and answer different coding questions. Users can post Coding questions and others can answer via submitting their code. Also, users can filter questions based on platforms and by using search.

# Features

## Landing Page

![homepage.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1648665524787/tCmhSMqxR.png)

This is a home/landing page or you could say about page. On this page, the introduction of the platform is mentioned. Apart from this, what features it offers are also written. Users can navigate to problems by clicking on the problem button which presents in the navigation bar. They can also log in by clicking on the login button.


## Add a coding question with platforms

![Ask_question.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1648664679807/E1-7uK-na.png)

Users can click on add question button. After clicking, this modal will pop up in which the user can type a question, the question's link, and also choose on which platform this question is available. After adding this information, the user has to just click on add button.


## Filter coding questions based on platforms and search 

![Platforms_Filters.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1648665296814/q1NHJFZZ9.png)

I guess it is an important feature to filter out questions based on the platforms they present. There are many users who just practice from only one single platform and that is why this feature will help them out.

![Using_Search.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1648665308314/dKWl0kWZs.png)

It is very common and helpful to the search questions. Because of that, I added a search bar on top so that users can easily search their questions and find out whether the question is available on the platform or not.


## Code Form to submit problem's solution in different programming languages

![codeForm.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1648665487288/mzZy8ZW2b.png)

To answer and provide solutions to the coding questions, this code form is used. When users click on questions from the problem page, it will redirect to the answers page where they can see all submitted solutions for only that particular question. Also, after all, solutions, there is a code form. Users have to select a programming language and add code in the editor then click on add button.

## Vote on submitted answers

![answers.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1648665426817/DBAdAqBwt.png)

Like StackOverflow, here users can also upvote submitted coding solutions for specific questions. The order in which solutions are displayed will be based on upvotes. The solution which has higher votes will be displayed first and vise versa.

## Authentication to add and answer coding problems

![protected_feature.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1648665191864/41_VD9DYv.png)

Apart from the filter feature, users have to log in to access the above features. In modern applications, authentication and authorization will play an important role. If users want to ask questions or answer the coding question, then first they have to log in with their email address. If they didn't log in and try to access the feature then the above pop-up will appear on the screen.

![auth.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1648665210759/LDjOJGgzr.png)

For authentication, I have used Auth0 which is very compatible with Hasura and also much easier to set up with nextjs. After authentication, Auth0 will add users to the PostgreSQL database users table.

# Tech Stack

- [Chakra-UI](https://chakra-ui.com/) for UI
- [Next JS](https://nextjs.org/) to build website
- [Hasura](https://hasura.io/) to manage backend
- [Auth0](https://auth0.com/) for Authentication
- [PostgreSQL from Heroku](https://www.heroku.com/postgres) for database
- [Apollo GraphQL](https://www.apollographql.com/) to fetch data using graphQL queries
- [Vercel](https://vercel.com/) to host a website

# How to setup the project
- First clone this repo.
- Create Hasura project and setup database using this [link](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/hasura-backend/) and also setup Auth0 with this [link](https://hasura.io/learn/graphql/hasura/authentication/1-create-auth0-app/)
- Create `.env` file and enter below variables with values
  ```
  HASURA_SECRET=
  HASURA_HTTP_URL=
  HASURA_WSS_URL=
  AUTH0_SECRET=
  AUTH0_BASE_URL=
  AUTH0_ISSUER_BASE_URL=
  AUTH0_CLIENT_ID=
  AUTH0_CLIENT_SECRET=
  ```
 - Now, enjoy the project
