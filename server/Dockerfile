FROM node:14.15.1-alpine
ENV DEBUG=*
LABEL version="0.0.4"
LABEL description="Pi Express.js socket.IO Node.js System"
LABEL maintainer="friendlyneighborhoodgeeks@gmail.com"
COPY ./server/package.json ./server/package-lock.json* ./
RUN npm install --production
ENV NODE_ENV=production
COPY ./server ./
COPY ./server/docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
RUN ln -s usr/local/bin/docker-entrypoint.sh /entrypoint.sh
EXPOSE 80
USER node
ENTRYPOINT ["/entrypoint.sh"]
CMD ["supervisor", "/server.js"]
# CMD ["nodeamon=true","yarn", "port"]