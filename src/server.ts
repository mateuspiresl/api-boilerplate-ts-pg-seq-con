import 'module-alias/register';
import 'source-map-support/register';

import { app } from './app';
import { sequelize } from './config/database';
import { logger } from './config/logger';
import { PORT } from './config/settings';

logger.info('Connecting to the database...');
sequelize
  .authenticate({ retry: { max: 5 } })
  .then(() => {
    logger.info('Database successfully connected.');
    logger.info('Starting the server...');
    const server = app.listen(PORT);
    return new Promise((resolve, reject) => {
      server.on('listening', () => {
        logger.info('Server successfully started at port %d.', PORT);
        resolve();
      });
      server.on('error', reject);
    });
  })
  .catch((error) => {
    logger.info('Failed.');
    logger.error(error);
    process.exit(1);
  });
