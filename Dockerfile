FROM keymetrics/pm2:latest-alpine
WORKDIR /usr/app/front
EXPOSE 3000
COPY ./ ./
RUN npm install
CMD ["yarn", "start"]