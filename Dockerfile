FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY ["./server/package.json", "./server/package-lock.json*"] .
RUN cd server && npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 80
RUN chown -R node /usr/src/app
USER node
CMD ["yarn", "prod"]
