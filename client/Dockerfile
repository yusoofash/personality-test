FROM node:16-alpine as base

WORKDIR /client
EXPOSE 3030

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]