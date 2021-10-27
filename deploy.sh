docker container stop nextjs 
docker container rm nextjs
docker image rm nextjs-app
docker build -t nextjs-app .
docker run -it --name nextjs -p 3000:3000 nextjs-app:latest


