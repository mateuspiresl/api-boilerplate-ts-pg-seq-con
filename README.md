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
DATABASE_URL="<database URL>"
```

Example:

```sh
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
yarn start
```
