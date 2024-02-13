FROM node:18.3

COPY package.json yarn.lock ./
WORKDIR /app
RUN npm install

COPY . .

CMD ["node", "index.js"]
