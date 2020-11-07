import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { swaggerSpec, swaggerUiOptions } from '~/config/docs';

export const DocsRouter = express
  .Router()
  .get('/spec.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  })
  .use(swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));
