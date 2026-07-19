# Use the official Node.js 22 LTS Alpine image as the base image.
# Alpine is lightweight, making the final image smaller.
FROM node:22-alpine

# Set the working directory inside the container.
# All subsequent commands will run from this directory.
WORKDIR /app

# Copy package.json and package-lock.json first.
# This allows Docker to cache dependency installation if application code changes.
COPY package*.json ./

# Install application dependencies.
RUN npm install

# Copy the remaining application source code into the container.
COPY . .

# Inform Docker that the application listens on port 8080.
# This is documentation only; it doesn't publish the port.
EXPOSE 8080

# Start the Node.js application when the container starts.
CMD ["node", "server.js"]