# Part 1: Create $project React app Production Build
FROM docker.br.hmheng.io/com-hmhco-csl/docker-node:10-latest as hmhNodeBaseImage
LABEL "app"="project-db-ui"
WORKDIR /opt/project-db-ui
COPY . .
RUN npm install -g yarn
RUN rm package-lock.json 2>/dev/null || true
RUN yarn install --silent
RUN yarn build

# Part 2: Serve static build files via nginx
RUN apt-get update
RUN mv deploy/nginx-conf/nginx.list /etc/apt/sources.list.d/nginx.list
RUN apt-get -y install curl
RUN curl -L https://nginx.org/keys/nginx_signing.key | sudo apt-key add -
RUN apt-get update
RUN apt-get install nginx=1.16.1-1~xenial 

RUN chmod 777 deploy/nginx-startup.sh
CMD ["./deploy/nginx-startup.sh", "8000"]