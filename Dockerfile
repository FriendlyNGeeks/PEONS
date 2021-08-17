FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY . .
WORKDIR /app/server
RUN npm install --production --silent
WORKDIR /app
EXPOSE 80
RUN chown -R node /app
USER node
WORKDIR /app/server
CMD "npm start prod"
