FROM node:14.15.1
LABEL version="0.0.4"
LABEL description="Pi Express.js socket.IO Node.js System"
LABEL maintainer="friendlyneighborhoodgeeks@gmail.com"
ENV NODE_ENV=production
WORKDIR /server
COPY /server/package.json ./
RUN npm install
COPY . .
EXPOSE 80
RUN chown -R node /server
USER node
CMD ["npm", "start"]
