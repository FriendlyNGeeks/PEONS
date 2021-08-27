#Dockerfile
FROM node:14.15.1-alpine
WORKDIR /app
ENV DEBUG=*
LABEL version="0.0.5"
LABEL description="Pi Express.js socket.IO Node.js System"
LABEL maintainer="friendlyneighborhoodgeeks@gmail.com"
COPY package.json ./app
RUN npm install --production
ENV NODE_ENV=production
# COPY . ./
# COPY ./server/server.js ./server
# COPY ./server/yarn.lock ./server
# WORKDIR /app/server
COPY ./server .
# RUN chmod +x ./server
# COPY ./server/docker-entrypoint.sh /usr/local/bin/
# RUN chmod +x /usr/local/bin/docker-entrypoint.sh
# RUN ln -s usr/local/bin/docker-entrypoint.sh /entrypoint.sh
# USER node
# CMD ["supervisor", "/server.js"]
# RUN yarn
# RUN yarn add global nodemon
WORKDIR /app
ENTRYPOINT ["/app/docker-entrypoint.sh"]

EXPOSE 7000


STOPSIGNAL SIGQUIT

# CMD ["node", "start" "--production"]