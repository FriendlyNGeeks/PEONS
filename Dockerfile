FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY ./server/package.json ./server
RUN cd server && npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 80
RUN chown -R node /app
USER node
CMD ["yarn", "portainer"]
