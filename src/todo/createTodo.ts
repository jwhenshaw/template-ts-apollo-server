import { gql } from 'apollo-server';
import { ResolverContext } from '../types/Context';

export default {
  typeDefs: gql`
    input CreateTodoInput {
      label: String!
      done: Boolean
      listId: ID!
    }

    extend type Mutation {
      createTodo(todo: CreatTodoInput!): Todo!
    }
  `,
  resolvers: {
    Mutation: {
      //   async createClinic(
      //     _: any,
      //     args: MutationCreateClinicArgs,
      //     resolverContext: ResolverContext,
      //   ): Promise<Clinic> {
      //     const { clinic } = args;
      //     const { user } = resolverContext;
      //     const organisation = clinic.organisation || user.organisation;
      //     graphqlAuthorise(policies, {
      //       ...policyDetails,
      //       principle: user,
      //       requestArgs: { organisation },
      //     });
      //     const clinicToCreate: Clinic = {
      //       organisation,
      //       ...pickBy(identity, {
      //         name: clinic.name,
      //         addresses: clinic.addresses,
      //       }),
      //     };
      //     return resolverContext.dataSources.clinics.model.create(clinicToCreate);
      //   },
    },
  },
};
