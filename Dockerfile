FROM node:14-alpine
LABEL version="0.0.4"
LABEL description="Pi Express.js socket.IO Node.js System"
LABEL maintainer = "friendlyneighborhoodgeeks@gmail.com"
ENV NODE_ENV=production
WORKDIR /app
COPY . .
WORKDIR /app/server
RUN npm install --production
WORKDIR /app
# RUN npm install
EXPOSE 80
# RUN chown -R node /app
# USER node
# RUN npm run start
CMD ["npm", "start"]
