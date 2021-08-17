FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["./server/package.json", "./server/package-lock.json*", "./server/npm-shrinkwrap.json*", "./"]
COPY . .
RUN cd server && npm install --production --silent && mv node_modules ../
EXPOSE 80
RUN chown -R node /usr/src/app
USER node
CMD ["yarn", "prod"]
