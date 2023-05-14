FROM node:18-alpine

WORKDIR /workspace

COPY ./package.json ./
COPY ./src ./src

RUN npm install

EXPOSE 3000

RUN npm run start

# CMD [ "node", "main.js" ]