FROM node:18-alpine as base
LABEL authors="jeegnathebug"
EXPOSE 80

FROM base as dependencies

WORKDIR /install
COPY package.json yarn.lock ./
RUN yarn

FROM dependencies as development
ENV NODE_ENV=development

WORKDIR /code
COPY ./ /code/
COPY --from=dependencies /install/node_modules ./node_modules
