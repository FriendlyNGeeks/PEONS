FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR '/app'
COPY . .
WORKDIR '/app/server'
RUN npm install
WORKDIR '/app'
# RUN npm install
EXPOSE 80
# RUN chown -R node /app
USER node
# RUN npm run start
CMD ["yarn", "start"]
