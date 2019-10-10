# base image
FROM node:11

# set working directory
WORKDIR /srv/app/client

# install and cache app dependencies
COPY package.json /srv/app/client
COPY package-lock.json /srv/app/client
RUN npm install 
# RUN npm install react-scripts@3.0.1 -g 

COPY . /srv/app/client

# start app
CMD ["npm", "start"]
