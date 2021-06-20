FROM node:lts-alpine
WORKDIR /app
ADD . .
RUN yarn
RUN yarn build

FROM nginx:stable
WORKDIR /app
COPY --from=0 /app/build /usr/share/nginx/html
