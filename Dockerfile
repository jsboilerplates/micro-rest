FROM node:8-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

ADD ./config ./config
ADD ./build ./build
ADD ./static ./static

EXPOSE 3030

CMD ["node", "build"]

