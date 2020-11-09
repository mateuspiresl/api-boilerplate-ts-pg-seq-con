import 'module-alias/register';
import 'source-map-support/register';

import pg from 'pg';

import { logger } from '~/config/logger';
import { DATABASE_URL } from '~/config/settings';

const client = new pg.Client({
  connectionString: DATABASE_URL,
  connectionTimeoutMillis: 5000,
});
logger.info('Connecting...');
client
  .connect()
  .then(() => {
    logger.info('Connecting succeeded.');
    logger.info('Quering...');
    return client
      .query('SELECT NOW()')
      .then((res) => {
        logger.info('Query succeeded: %o.', res.rowCount);
      })
      .catch((error) => {
        logger.info('Query failed.');
        throw error;
      })
      .finally(() => client.end());
  })
  .catch((error) => {
    logger.info('Connecting failed.');
    logger.error(error);
    process.exit(1);
  });
