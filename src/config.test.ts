import { config as dotEnvConfig } from 'dotenv';
import './config';

jest.mock('dotenv');

describe('config', () => {
  it('should read env vars from .env.test', () => {
    expect(dotEnvConfig).toHaveBeenCalledWith({ path: `${process.cwd()}/.env.test` });
  });
});
