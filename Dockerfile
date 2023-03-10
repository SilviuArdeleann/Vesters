FROM node:current-alpine

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN npm install

CMD ["npm", "start"]