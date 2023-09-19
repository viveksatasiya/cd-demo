# Use the official Node.js 16 image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install npm packages
RUN npm install

# Copy the rest of the code to the working directory
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose port 3000 for the application to listen on
EXPOSE 3000

# Command to run the application
CMD [ "node", "dist/index.js" ]
