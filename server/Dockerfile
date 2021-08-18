FROM node:14.15.1
LABEL version="0.0.4"
LABEL description="Pi Express.js socket.IO Node.js System"
LABEL maintainer="friendlyneighborhoodgeeks@gmail.com"
WORKDIR /server
USER node
COPY package.json package-lock.json* ./
RUN npm install
ENV NODE_ENV=production
COPY --chown=node:node . .
EXPOSE 80
USER node
# RUN chown -R node /server
CMD ["npm", "start"]
