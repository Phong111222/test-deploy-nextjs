FROM node:14

#Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#instanlling dependencices
COPY package*.json /usr/src/app/
RUN npm install

#Copy source files
COPY . /usr/src/app/

#Building app
RUN npm run build
EXPOSE 3000

#Runnng the app

CMD "npm" "run" "start"


