FROM node:8-alpine

WORKDIR /app
COPY . /app

RUN npm install
EXPOSE 3030

CMD ["node", "src"]

