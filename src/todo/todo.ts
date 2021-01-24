import { gql } from 'apollo-server';
import { ResolverContext } from '../types/Context';

export default {
  typeDefs: gql`
    extend type Query {
      todoById(id: String!): Todo
    }
  `,
  resolvers: {
    Query: {
      async todoById(
        _: unknown,
        args: unknown,
        resolverContext: ResolverContext,
      ): Promise<void> {},
    },
  },
};
