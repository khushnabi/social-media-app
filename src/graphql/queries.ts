import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query FetchUser($userId: ID!) {
    user(id: $userId) {
      id
      email
      created_at
    }
  }
`;
