import { DataSources } from '../datasources';

export interface Context {}

export interface ResolverContext extends Context {
  dataSources: DataSources;
}
