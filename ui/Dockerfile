FROM node:12.19.0-alpine3.9
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn

COPY . /app
RUN yarn build

EXPOSE 3000
CMD yarn dev
