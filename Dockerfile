FROM node:16.14-alpine

COPY ./src/ /app/instrumentalness/
WORKDIR /app/instrumentalness/routes/

RUN npm install

EXPOSE 3000

CMD npm start














