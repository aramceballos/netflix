FROM node:14

COPY ["package.json", "package-lock.json", "/usr/src/app/"]

WORKDIR /usr/src/app

RUN npm install --only=production

COPY [".", "/usr/src/app/"]

RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]