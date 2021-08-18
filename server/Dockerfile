FROM node:14.15.1
LABEL version="0.0.4"
LABEL description="Pi Express.js socket.IO Node.js System"
LABEL maintainer="friendlyneighborhoodgeeks@gmail.com"
WORKDIR /usr/src/server
COPY package.json package-lock.json* ./
RUN npm install
ENV NODE_ENV=production
USER node
COPY . .
EXPOSE 80
CMD ["npm", "start"]
