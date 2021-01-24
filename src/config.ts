import { config as dotEnvConfig } from 'dotenv';

const convict = require('convict');
const path = require('path');

const dotEnvFile = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';
dotEnvConfig({ path: path.resolve(process.cwd(), dotEnvFile) });

const convictConfig = {
  service: {
    name: {
      doc: 'Service namespace',
      format: String,
      default: 'api-todo',
      env: 'SERVICE_NAME',
      arg: 'service-name',
    },
    endpoint: {
      doc: 'Endpoint of service',
      format: String,
      default: 'http://localhost:4099',
      env: 'ENDPOINT',
      arg: 'endpoint',
    },
    port: {
      doc: 'Port to listen on',
      format: Number,
      default: 4099,
      env: 'PORT',
      arg: 'port',
    },
  },
  db: {
    uri: {
      doc: 'Mongo connection string',
      format: String,
      default: 'mongodb://127.0.0.1:27017/?replicaSet=rs',
      env: 'MONGO_CONNECT',
      arg: 'mongo-connect',
    },
    example: {
      doc: 'Example mongodb collection',
      format: String,
      default: 'example',
      env: 'DB_EXAMPLE',
      arg: 'db-example',
    },
  },
};

const config = convict(convictConfig);
export type Config = typeof config;
export default config;
