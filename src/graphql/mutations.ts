import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation Signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      accessToken
      refreshToken
      user {
        id
        email
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      refreshToken
      user {
        id
        email
      }
    }
  }
`;
