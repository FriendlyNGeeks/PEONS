FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY . .
WORKDIR /app/server
COPY "./server/package.json" .
RUN npm install
EXPOSE 80
RUN chown -R node /app
USER node
CMD ["yarn", "prod"]
