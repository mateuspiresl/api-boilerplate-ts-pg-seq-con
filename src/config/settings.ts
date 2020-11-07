import * as dotenv from 'dotenv';

dotenv.config();

['NODE_ENV', 'PORT', 'DATABASE_URL'].forEach((name: string) => {
  if (process.env[name] === undefined) {
    throw new Error(`Missing environment variable '${name}'`);
  }
});

export const NODE_ENV = process.env.NODE_ENV!;
export const PORT = parseInt(process.env.PORT!, 10);
export const DATABASE_URL = process.env.DATABASE_URL!;
