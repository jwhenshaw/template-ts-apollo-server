import { gql } from 'apollo-server';
import { ResolverContext } from '../types/Context';
import { MutationCreateTodoArgs, Todo } from '../types/generated/graphql';

export default {
  typeDefs: gql`
    input CreateTodoInput {
      label: String!
      done: Boolean
      listId: ID!
    }

    extend type Mutation {
      createTodo(todo: CreateTodoInput!): Todo!
    }
  `,
  resolvers: {
    Mutation: {
      async createTodo(
        _: any,
        args: MutationCreateTodoArgs,
        resolverContext: ResolverContext,
      ): Promise<Todo> {
        const { todo } = args;

        const result = await resolverContext.dataSources.todo.model.create(
          todo,
        );

        return result.toObject();
      },
    },
  },
};
