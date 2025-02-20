FROM node:18-alpine

WORKDIR /usr/src/app

# Copy dependency files and install dependencies (this will include dev dependencies)
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of your application source code
COPY . .

# Build the application (ensure you have a build script defined in package.json)
RUN yarn build

# Expose the port your NestJS app uses
EXPOSE 5000

# Start the application
CMD ["node", "dist/main.js"]
