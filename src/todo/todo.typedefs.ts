import { gql } from 'apollo-server';

export default gql`
  type Todo {
    _id: ID!
    label: String!
    done: Boolean
    listId: ID!
  }
`;
