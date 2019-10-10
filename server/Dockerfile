# base image
FROM node:11-alpine

# set working directory
WORKDIR /srv/app/server

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /srv/app/server
COPY package-lock.json /srv/app/server

# COPY package*.json ./

RUN npm install --no-optional
# RUN npm install react-scripts@3.0.1 -g 

# RUN npm audit fix 

COPY . /srv/app/server

# start app
# RUN npm run server
# CMD ["npm","rebuild","bcript","--build-from-source"]
# CMD ["npm", "start"]

