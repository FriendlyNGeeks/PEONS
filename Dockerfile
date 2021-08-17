FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY ./server/package.json ./server
RUN cd ./app/server
RUN npm install
RUN cd ..
COPY . .
EXPOSE 80
RUN chown -R node /app
USER node
CMD ["yarn", "portainer"]
