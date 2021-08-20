#Dockerfile
FROM node:14.15.1-alpine
ENV DEBUG=*
LABEL version="0.0.4"
LABEL description="Pi Express.js socket.IO Node.js System"
LABEL maintainer="friendlyneighborhoodgeeks@gmail.com"
WORKDIR /usr/src/server
COPY ./server/package.json .
RUN npm install --production
ENV NODE_ENV=production
# COPY ./server ./
COPY ./server/server.js .
COPY ./server/yarn.lock .
COPY ./server/build ./usr/src/server/build
RUN chmod +x .
COPY ./server/docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
RUN ln -s usr/local/bin/docker-entrypoint.sh /entrypoint.sh
# USER node
# CMD ["supervisor", "/server.js"]
# RUN yarn
# RUN yarn add global nodemon
ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 80


STOPSIGNAL SIGQUIT

CMD ["node", "start" "--production"]