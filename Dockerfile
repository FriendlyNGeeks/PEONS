FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY . /app
WORKDIR /app/server
RUN npm install
WORKDIR /app
# RUN npm install
EXPOSE 80
RUN chown -R node /app
USER node
CMD ["yarn", "start"]
