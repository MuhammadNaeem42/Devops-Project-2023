FROM node:lts-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# Start the Vite development server
CMD ["npm", "run", "preview"]
