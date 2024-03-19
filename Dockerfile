FROM node:18-alpine AS base
LABEL authors="jeegnathebug"
EXPOSE 80

FROM base as development
ENV NODE_ENV=development

WORKDIR /code

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY ./ /code/
