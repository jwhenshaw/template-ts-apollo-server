import { gql } from 'apollo-server';
import { ResolverContext } from '../types/Context';

export default {
  typeDefs: gql`
    extend type Query {
      todo(id: String!): Todo
    }
  `,
  resolvers: {
    Query: {
      //   async clinic(
      //     parent: unknown,
      //     args: QueryClinicArgs,
      //     resolverContext: ResolverContext,
      //   ): Promise<Maybe<Clinic>> {
      //     const { user } = resolverContext;
      //     const { id: clinicId } = args;
      //     const organisation = user.role.name === 'elephant' ? undefined : user.organisation;
      //     graphqlAuthorise(policies, {
      //       ...policyDetails,
      //       principle: user,
      //       requestArgs: { organisation, clinic: clinicId },
      //     });
      //     const clinic = await resolverContext.dataSources.clinics.model.findOne(
      //       pickBy(identity, {
      //         uuid: clinicId,
      //         organisation,
      //       }),
      //     );
      //     if (!clinic) {
      //       throw new NotFoundError('Clinic');
      //     }
      //     return clinic;
      //   },
    },
  },
};
