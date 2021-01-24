import { gql } from 'apollo-server';
import { MutationRemoveTodoArgs } from '../types/generated/graphql';
import { ResolverContext } from '../types/Context';

export default {
  typeDefs: gql`
    input removeTodoInput {
      id: ID
    }

    extend type Mutation {
      removeTodo(input: removeTodoInput!): Boolean
    }
  `,
  resolvers: {
    Mutation: {
      async removeClinic(
        _: any,
        args: MutationRemoveTodoArgs,
        resolverContext: ResolverContext,
      ): Promise<Boolean> {
        const { input } = args;
        const result = await resolverContext.dataSources.todo.model.remove({
          _id: input.id,
        });

        return result.ok === 1;
      },
    },
  },
};
