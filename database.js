/* eslint-disable @typescript-eslint/no-var-requires */

const dotenv = require('dotenv');

const { logger } = require('./dist/config/logger');

dotenv.config();

const [
  ,
  dialect,
  username,
  password,
  host,
  port,
  database,
] = /^(\w+):\/\/(.+):(.+)@(.+):(\d+)\/([\w-]+)/.exec(process.env.DATABASE_URL);

const config = {
  username,
  password,
  database,
  host,
  port,
  dialect,
  dialectOptions: {
    bigNumberStrings: true,
  },
};

logger.info('Database configuration: %o', config);

module.exports = {
  production: config,
  staging: config,
  development: config,
  test: config,
};
