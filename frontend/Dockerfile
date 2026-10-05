# Stage one build the UI

FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Stage two: Serve the UI with Nginx

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY --nginx.config /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
