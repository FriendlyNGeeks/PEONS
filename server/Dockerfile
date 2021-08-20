#Dockerfile
FROM node:14.15.1-alpine
WORKDIR /usr/src/server
ENV DEBUG=*
LABEL version="0.0.4"
LABEL description="Pi Express.js socket.IO Node.js System"
LABEL maintainer="friendlyneighborhoodgeeks@gmail.com"
COPY ./server/package.json .
RUN npm install --production
ENV NODE_ENV=production
# COPY ./server ./
COPY ./server/server.js .
COPY ./server/yarn.lock .
COPY ./server/build ./build
# RUN chmod +x /usr/src/server
COPY ./server/docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
RUN ln -s usr/local/bin/docker-entrypoint.sh /entrypoint.sh
# USER node
# CMD ["supervisor", "/server.js"]
# RUN yarn
# RUN yarn add global nodemon
# WORKDIR /usr/src/server
RUN ls
ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 80


STOPSIGNAL SIGQUIT

# CMD ["node", "start" "--production"]