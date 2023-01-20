FROM node:16.15.1

WORKDIR /leftoversmarketplace

COPY package*.json .
RUN npm install
COPY . .
CMD node server.js