FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN yarn --production

EXPOSE 3000

ENTRYPOINT ["node"]

CMD ["src/index.mjs"]
