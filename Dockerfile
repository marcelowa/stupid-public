# Use Node.js LTS version as the base image
FROM node:23-alpine

RUN mkdir -p /usr/app-data
# Create app directory
WORKDIR /usr/app

# Copy package files
COPY * ./

# Install dependencies
RUN npm install


# Expose the port the app runs on
EXPOSE 3000

ENV PUBLIC_DIR="/usr/app-data"

# Command to run the application
CMD ["npm", "start"]
