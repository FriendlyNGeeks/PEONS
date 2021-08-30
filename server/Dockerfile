#Dockerfile
FROM node:14.15.1-alpine
LABEL version="0.0.5"
LABEL description="Pi Express.js socket.IO Node.js System"
LABEL maintainer="friendlyneighborhoodgeeks@gmail.com"
# ENV DEBUG=*
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install --production
ENV NODE_ENV=production
COPY ./server /usr/src/app
# RUN chmod +x ./server
# COPY ./server/docker-entrypoint.sh /usr/local/bin/
# RUN chmod +x /usr/local/bin/docker-entrypoint.sh
# RUN ln -s usr/local/bin/docker-entrypoint.sh /entrypoint.sh
# USER node
EXPOSE 80
# ENTRYPOINT ["/entrypoint.sh"]
CMD [ "npm", "start" ]

# STOPSIGNAL SIGQUIT
# CMD ["node", "start" "--production"]