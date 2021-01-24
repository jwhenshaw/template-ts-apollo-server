import { DataSource } from 'apollo-datasource';
import { Config } from './config';
import { ResolverContext } from './types/Context';
import { TodoDatasource } from './todo/TodoDatasource';

function getDataSources({ config }: { config: Config }) {
  return function dataSources<TContext extends ResolverContext>() {
    return {
      todo: new TodoDatasource<TContext>({ config }),
    };
  };
}

export type DataSources = ReturnType<ReturnType<typeof getDataSources>>;

export { getDataSources as dataSources };
