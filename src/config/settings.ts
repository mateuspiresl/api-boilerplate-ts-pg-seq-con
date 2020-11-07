import * as dotenv from 'dotenv';

import { logger } from './logger';

dotenv.config();

['DATABASE_URL'].forEach((name: string) => {
  if (process.env[name] === undefined) {
    throw new Error(`Missing environment variable '${name}'`);
  }
});

export const DATABASE_URL = process.env.DATABASE_URL!;

logger.info('Environment: %o', {
  DATABASE_URL,
});
