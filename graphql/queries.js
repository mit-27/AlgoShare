import { gql } from '@apollo/client'


export const INSERT_VOTE_MUTATION = gql`
mutation MyMutation($codeAnswerID:uuid!,$upvoted:Boolean!,$userID:String!) {
  insert_Votes(objects: {codeAnswerID: $codeAnswerID, upvoted: $upvoted, userID: $userID}) {
    returning {
      id
    }
  }
}
`;

export const UPDATE_VOTE_MUTATION = gql`
mutation MyMutation($codeAnswerID:uuid!,$upvoted:Boolean!,$userID:String!) {
  update_Votes(where: {codeAnswerID: {_eq: $codeAnswerID}, userID: {_eq: $userID}}, _set: {upvoted: $upvoted}) {
    returning {
      id
      upvoted
      userID
    }
  }
}
`;



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
    question
    platforms
    questionURL
    code_answers {
      codeAnswer
      id
      votes {
        id
        upvoted
        userID
      }
      language
      user {
        name
        id
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


export const ADD_CODE_ANSWER_MUTATION = gql`
mutation MyMutation($codeAnswer:String!,$language:String!,$questionID:uuid!,$userID:String!) {
  insert_code_answers_one(object: {codeAnswer: $codeAnswer, language: $language, questionID: $questionID, userID: $userID}) {
    id
  }
}
`