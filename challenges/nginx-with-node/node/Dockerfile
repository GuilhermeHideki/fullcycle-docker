FROM node:16 as builder

WORKDIR /usr/src/app

COPY . .

RUN yarn build

EXPOSE 3000

ENTRYPOINT ["node"]

CMD ["index.js"]
