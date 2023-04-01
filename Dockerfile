# From the base image node
	FROM node:19.8.1
	WORKDIR /app
	
	# Copy all the files from your file system to the container file system
	COPY ["package.json", "package-lock.json*", "./"]
	
	# Install all dependencies
	RUN npm install
	
	# Copy other files as well
    COPY . .
	
	# Expose the port
	EXPOSE 4000
	
	# Command to execute when the image is instantiated
	CMD ["npm","start"]