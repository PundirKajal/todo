FROM node:12.19.0-alpine3.9
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . /app
RUN npm run build

EXPOSE 8080

CMD npm start