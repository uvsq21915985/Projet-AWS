FROM node:23-alpine3.20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install socket.io express

COPY server.js ./

EXPOSE 6001

CMD ["node","server.js"]