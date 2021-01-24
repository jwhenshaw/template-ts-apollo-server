import { gql } from 'apollo-server';
import { GraphQLDate, GraphQLDateTime, GraphQLTime } from 'graphql-iso-date';

export default {
  typeDefs: gql`
    scalar Date
    scalar Time
    scalar DateTime
    scalar PastDate
  `,
  resolvers: {
    Date: GraphQLDate,
    Time: GraphQLTime,
    DateTime: GraphQLDateTime,
  },
};
