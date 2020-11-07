import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJSDoc({
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Boilerplate',
      version: '0.0.0',
    },
    contact: { name: 'Mateus Pires', email: 'mateusplpl@gmail.com' },
    servers: [{ url: '/api' }],
  },
  apis: ['./docs/swagger/endpoints/*.yml', './docs/swagger/resources/*.yml'],
});

export const swaggerUiOptions = {
  explorer: true,
  customCss: '.swagger-ui .models { display: none !important; }',
};
