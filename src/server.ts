import 'module-alias/register';
import 'source-map-support/register';

import { app } from './app';
import { sequelize } from './config/database';
import { logger } from './config/logger';
import { PORT } from './config/settings';

sequelize.authenticate().then(() => {
  const server = app.listen(PORT);
  server.on('listening', () =>
    logger.info('--> Server successfully started at port %d', PORT),
  );
  server.on('error', logger.error);
});
