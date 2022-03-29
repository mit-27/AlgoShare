import { gql } from '@apollo/client'

export const INSET_CODE_QUESTION = gql`
mutation MyMutation($question:String!,$questionURL:String!,$userID:String!,$platforms:jsonb) {
    insert_code_questions(objects: {platforms: $platforms, question: $question, questionURL: $questionURL, userID: $userID}) {
      affected_rows
    }
  }
`;

export const GET_CODE_QUESTIONS = gql`
query MyQuery {
  code_questions(order_by: {addedTime: desc}) {
    question
    platforms
    id
    questionURL
    addedTime
  }
}
`;

export const GET_ONE_CODE_QUESTION_SUBSCRIPTION = gql`
subscription Mysubscription($questionID:uuid!) {
  code_questions_by_pk(id: $questionID) {
    id
    platforms
    question
    questionURL
    code_answers {
      codeAnswer
      id
      Votes {
        id
        upvoted
        userID
      }
    }
    user {
      name
    }
  }
}
`;

export const GET_CODE_QUESTIONS_SUBSCRIPTION = gql`
subscription MySubscription {
  code_questions(order_by: {addedTime: desc}) {
    id
    platforms
    question
    questionURL
    code_answers_aggregate {
      aggregate {
        count
      }
    }
    user {
      name
    }
  }
}
`;