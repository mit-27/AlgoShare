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

export const GET_CODE_QUESTIONS_MUTATION = gql`
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