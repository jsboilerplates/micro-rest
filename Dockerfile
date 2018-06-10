FROM node:8-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

RUN npm run build

COPY . .

EXPOSE 3030

CMD ["node", "build"]

