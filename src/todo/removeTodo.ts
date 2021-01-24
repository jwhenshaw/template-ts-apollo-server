import { gql } from 'apollo-server';
import { ResolverContext } from '../types/Context';

export default {
  typeDefs: gql`
    extend type Mutation {
      removeTodo(id: ID!)
    }
  `,
  resolvers: {
    Mutation: {
      // async removeClinic(
      //   _: any,
      //   args: MutationUpdateClinicArgs,
      //   resolverContext: ResolverContext,
      // ): Promise<Clinic> {
      //   const { user } = resolverContext;
      //   const clinicId = args.uuid;

      //   const organisation = user.role.name === 'elephant' ? undefined : user.organisation;

      //   graphqlAuthorise(policies, {
      //     ...policyDetails,
      //     principle: user,
      //     requestArgs: { organisation, clinic: clinicId },
      //   });

      //   const clinic = await resolverContext.dataSources.clinics.model.findOne(
      //     pickBy(identity, { uuid: clinicId, organisation }),
      //   );

      //   if (!clinic) {
      //     throw new NotFoundError('Clinic');
      //   }

      //   await clinic.update({ 'meta.active': false });
      //   return clinic;
      // },
    },
  },
};
