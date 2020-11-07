# Boilerplate

## Setup

Install yarn globaly.

```sh
npm install -g yarn
```

Install dependencies.

```sh
yarn install
```

Setup the environment variables.

> `.env` can be used.

```sh
NODE_ENV="<environment>"
PORT="<port>"
DATABASE_URL="<database URL>"
```

Example:

```sh
NODE_ENV=development
PORT=3000
DATABASE_URL=postgres://dev:dev@localhost:5432/boilerplate
```

## Development

To start the server watching changes.

```sh
yarn debug
```

## Production

```sh
yarn build
yarn server
```

## Documentation

This project uses Swagger UI to display the documentation. It initializes with the server, so to view it, start the server following the development or production instructions, and access `/docs`.
