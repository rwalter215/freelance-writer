# Use node 6.11.4 LTS
FROM node:6.11.4
ENV LAST_UPDATED 20160605T165400

# Copy source code
COPY . /carla

# Change working directory
WORKDIR /carla

# Install dependencies
RUN npm install

# Expose API port to the outside
EXPOSE 80

# Launch application
CMD ["npm","run", "client"]
