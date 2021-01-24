import { ApolloServer, mergeSchemas } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';
import { dataSources } from './datasources';
import { Config } from './config';
import connectToDb from './db';
import baseTypes from './scalars/base';

const federatedSchema = buildFederatedSchema([baseTypes]);

const schema = mergeSchemas({
  schemas: [federatedSchema],
  schemaDirectives: {},
});

export default async (config: Config): Promise<ApolloServer> => {
  const PORT = config.get('service.port');

  const db = await connectToDb();
  const server = new ApolloServer({
    engine: false,
    context: ({ req }: { req: Request; res: Response }) => null,
    dataSources: dataSources({
      config,
    }),
    schema,
    async onHealthCheck(): Promise<void> {},
  });

  const { url } = await server.listen(PORT);
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at ${url}`);

  // When stopping, close Mongo connection first
  const serverStop = server.stop.bind(server);
  server.stop = async (): Promise<void> => {
    await db.disconnect();
    await serverStop();
  };

  return server;
};
