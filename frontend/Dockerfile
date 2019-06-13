FROM node:12.4.0 as builder
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder build/ /usr/share/nginx/www/
COPY nginx.conf /etc/nginx/nginx.conf