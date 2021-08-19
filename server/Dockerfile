FROM node:14.15.1
LABEL version="0.0.4"
LABEL description="Pi Express.js socket.IO Node.js System"
LABEL maintainer="friendlyneighborhoodgeeks@gmail.com"
COPY ./server/package.json ./server/package-lock.json* ./
RUN npm install --production
ENV NODE_ENV=production
COPY ./server ./
EXPOSE 80
CMD ["yarn", "port"]
