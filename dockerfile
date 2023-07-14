FROM node:lts-buster-slim

WORKDIR /app

COPY ./src/package*.json ./
RUN npm ci