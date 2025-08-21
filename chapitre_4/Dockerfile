

# Use the official Node.js image as a base
From node:22-alpine

#set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install dependencies

RUN npm install


# Copy the rest of the application code to the working directory

COPY . .

EXPOSE 3000

CMD ["node", "./src/server.js"]

