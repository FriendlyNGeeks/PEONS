FROM node:14.15.1
LABEL version="0.0.4"
LABEL description="Pi Express.js socket.IO Node.js System"
LABEL maintainer="friendlyneighborhoodgeeks@gmail.com"
# WORKDIR /usr/src/server
COPY ./server/package.json ./server/package-lock.json* ./
RUN npm install
ENV NODE_ENV=production
COPY ./server ./
EXPOSE 80
# RUN chmod +x /usr/src/server/node_modules/.bin/nodemon
CMD ["yarn", "prod"]

