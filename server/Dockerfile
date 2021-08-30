#Dockerfile
FROM node:14.15.1-alpine
LABEL version="0.0.7"
LABEL description="Pi Express.js socket.IO Node.js System"
LABEL maintainer="friendlyneighborhoodgeeks@gmail.com"
# ENV DEBUG=*
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install --production
ENV NODE_ENV=production
COPY ./server /usr/src/app
EXPOSE 80
# ENTRYPOINT ["/entrypoint.sh"]
CMD [ "npm", "start" ]