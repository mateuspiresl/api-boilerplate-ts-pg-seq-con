import 'module-alias/register';
import 'source-map-support/register';

import pg from 'pg';

import { logger } from '~/config/logger';
import { DATABASE_URL } from '~/config/settings';

const pool = new pg.Pool({
  connectionString: DATABASE_URL,
  connectionTimeoutMillis: 5000,
});
logger.info('Connecting to pool...');
pool.connect((error, _, done) => {
  if (error) {
    logger.info('Connecting to pool failed.');
    logger.error(error);
    done(error);
  } else {
    logger.info('Connecting succeeded.');
    done();
  }
});
logger.info('Quering using pool...');
pool.query('SELECT NOW()', (error, res) => {
  if (error) {
    logger.info('Query using pool failed.');
    logger.error(error);
  } else {
    logger.info('Query using pool succeeded: %o.', res?.rowCount);
  }

  pool.end();
});

const client = new pg.Client({
  connectionString: DATABASE_URL,
  connectionTimeoutMillis: 5000,
});
logger.info('Connecting to client...');
client.connect((error) => {
  if (error) {
    logger.info('Connecting to client failed.');
    logger.error(error);
  } else {
    logger.info('Connecting to client succeeded.');
  }
});
logger.info('Quering using client...');
client.query('SELECT NOW()', (error, res) => {
  if (error) {
    logger.info('Query using client failed.');
    logger.error(error);
  } else {
    logger.info('Query using client succeeded: %o.', res?.rowCount);
  }

  client.end();
});
