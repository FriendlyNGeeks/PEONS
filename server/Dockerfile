FROM node:14.15.1
LABEL version="0.0.4"
LABEL description="Pi Express.js socket.IO Node.js System"
LABEL maintainer="friendlyneighborhoodgeeks@gmail.com"
WORKDIR /server
COPY package.json package-lock.json* ./
RUN npm install
ENV NODE_ENV=production
COPY . /server
USER node
EXPOSE 80
RUN chown -R node .
CMD ["npm", "start"]
