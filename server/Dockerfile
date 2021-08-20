#Dockerfile
FROM node:14.15.1-alpine
ENV DEBUG=*
LABEL version="0.0.4"
LABEL description="Pi Express.js socket.IO Node.js System"
LABEL maintainer="friendlyneighborhoodgeeks@gmail.com"
COPY ./server/package.json ./
# RUN npm install --production
ENV NODE_ENV=production

COPY ./server/docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
RUN ln -s usr/local/bin/docker-entrypoint.sh /entrypoint.sh
# USER node
ENTRYPOINT ["/entrypoint.sh"]
# CMD ["supervisor", "/server.js"]
# RUN yarn
# RUN yarn add global nodemon
COPY ./server ./
EXPOSE 80
# RUN chmod +x /usr/src/server/node_modules/.bin/nodemon
CMD ["yarn", "port"]