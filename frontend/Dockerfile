FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app files
COPY . .

# Expose port 3000
EXPOSE 3000

# Add host flag for Vite to work in Docker
ENV VITE_DOCKER=true

CMD ["npm", "install"]
# Start the app in development mode
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]