FROM node:12.4.0

COPY package.json package.json
RUN npm install

COPY . .

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["node", "index.js", "--use-strict"]