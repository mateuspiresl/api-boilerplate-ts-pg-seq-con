# Based on the article Build A Production Ready Node/Express API With Docker, by
# Mohammed Mwijaa, at
# https://medium.com/javascript-in-plain-english/build-a-production-ready-node-express-api-with-docker-9a45443427a0


FROM node:12-alpine AS node


#############
# Build stage

FROM node AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY src ./src

COPY tsconfig.json ./

RUN yarn build


############
# Pack stage

FROM node AS pack

# Temporary. Useful to try connecting to the database from the app container
RUN apk add postgresql

RUN mkdir -p /home/node/app/dist

RUN chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json yarn.lock ./

USER node

RUN yarn install --production

COPY --chown=node:node --from=build /app/dist ./dist
