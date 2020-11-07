/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

const dotenv = require('dotenv');

const NODE_ENV = process.env.NODE_ENV || 'development';

dotenv.config();
dotenv.config({ path: path.join(__dirname, `.env.${NODE_ENV}`) });

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

module.exports = {
  production: config,
  staging: config,
  development: config,
  test: config,
};
