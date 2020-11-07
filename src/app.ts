import 'express-async-errors';

import * as bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import lusca from 'lusca';
import morgan from 'morgan';

import { logger } from './config/logger';
import { ApiRouter } from './endpoints';
import { DocsRouter } from './endpoints/docs';
import { errorHandler } from './middlewares/error-handler';

export const app = express()
  .use(compression())
  .use(cors({ optionsSuccessStatus: 200 }))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(lusca.xframe('SAMEORIGIN'))
  .use(lusca.xssProtection(true))
  .use(
    morgan(
      ':remote-addr - :remote-user ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"',
      {
        stream: {
          write(text: string) {
            logger.info(text.replace(/\n$/, ''));
          },
        },
      },
    ),
  )

  // Health check
  .get('/ping', (req, res) => res.send('Pong!'))

  // Swagger documentation
  .use('/docs', DocsRouter)

  // Routes
  .use('/api', ApiRouter)

  .use(errorHandler);
