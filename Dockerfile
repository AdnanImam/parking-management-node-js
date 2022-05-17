FROM node:9-slim
WORKDIR /src/index.ts
COPY package.json ./app
RUN npm install
COPY . ./app
CMD ["npm","start"]