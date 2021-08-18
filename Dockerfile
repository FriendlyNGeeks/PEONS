FROM node:14.15.1
LABEL version="0.0.4"
LABEL description="Pi Express.js socket.IO Node.js System"
LABEL maintainer="friendlyneighborhoodgeeks@gmail.com"
ENV NODE_ENV=production
WORKDIR /app
RUN echo copying
COPY ./server/package.json /app
RUN echo install
RUN npm install
COPY . .
# WORKDIR /app
# RUN npm install
EXPOSE 80
# RUN chown -R node /app
# USER node
# RUN npm run start
CMD ["npm", "start"]
