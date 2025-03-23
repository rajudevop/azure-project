# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package.json package-lock.json ./

# Install both production and dev dependencies
RUN npm install

# Copy the entire application code to the container
COPY . .

# Set environment variables (can be overridden when running the container)
ENV PORT=80
ENV PG_PORT=5432

# Expose the port for the application
EXPOSE 80

# Run tests before starting the server
RUN npm run test

# Start the application using index.cjs (which requires server.cjs)
CMD ["node", "index.cjs"]
