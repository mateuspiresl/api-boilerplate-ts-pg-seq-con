import { Sequelize } from 'sequelize';

import { logger } from './logger';
import { DATABASE_URL } from './settings';

export const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  logging: (sql) => logger.verbose('[SQL] %s', sql),
});
