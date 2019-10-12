## Docker

- **Docker Desktop Install:** https://www.docker.com/products/docker-desktop

- **Dockerfile:** Defines a container that is to be built 
- **docker-compose.yml:** To build and run the container on *local machine* we can use docker-compose. The yml file defines this service. We can also use the docker commands to do the same.
- **Short Docker Intro video:** https://www.youtube.com/watch?v=vQxSOL9kE-s 


- **nginx** - Web server to serve the static react files https://www.nginx.com/ 
- **Installing nginx on Mac:** https://medium.com/@ThomasTan/installing-nginx-in-mac-os-x-maverick-with-homebrew-d8867b7e8a5a

- **Links related to make react router work inside nginx when a page is refreshed or if a url is opened in a new browser tab.** \
**On local machine/outside docker** \
https://stackoverflow.com/questions/43555282/react-js-application-showing-404-not-found-in-nginx-server \
**Inside docker:** \
https://stackoverflow.com/questions/51378080/containerized-reactjs-application-from-nginx-image-does-not-serve-all-routes \
**Note:** nginx uses default.conf (/etc/nginx/conf.d/) when running inside a docker container. When running on a local Mac, \
it uses nginx.conf (/usr/local/etc/nginx/)

- **How To Keep Docker Containers Running** \
This can be used for troubleshooting a container by keeping the container running
http://bigdatums.net/2017/11/07/how-to-keep-docker-containers-running/ \
Add ```CMD tail -f /dev/null``` to the Dockerfile. \
**Note:** There can only be one CMD instruction in a Dockerfile. 

- **How to install the latest nginx on Debian and Ubuntu** \
https://joshtronic.com/2018/12/17/how-to-install-the-latest-nginx-on-debian-and-ubuntu/ \
By default, nginx 1.10.x is installed on the bedrock node image, OS - Ubuntu 16.04.3 LTS (Xenial Xerus). \
deploy/nginx-conf/nginx.list contains the source repositories required to update nginx to a newer version. 

**Some handy commands:**

| Command | Details |
| ------------- |-------------|
| nginx -V | Print nginx version, compiler version, configure script parameters, display nginx folder locations, e.g. error log folder etc |
| nginx | Start nginx server |
| nginx -s stop | Stop nginx server |
| docker ps | Shows the container status |
| docker exec -it &lt;Container Id&gt; /bin/bash | To ssh inside the docker container. Replace &lt;Container Id&gt; obtained from docker ps |
| docker-compose build --no-cache | Build with no cache |
| apt-get update|Update the package database. In this context use it inside the docker container before installing anything like vim, etc.|
| apt-get install vim | To install vim editor inside docker container |
| apt-get install -y procps| Find a process using ps, e.g. find nginx process - ps aux | grep nginx|
| docker build -t docker.br.companyDomaineng.io/com-companyDomainco-project/project-db-ui:&lt;version&gt; . | Build the image - &lt;version&gt; can be 0.0.1 etc|
| docker run --rm --name project-db-ui -p 4000:3000 docker.br.companyDomaineng.io/com-companyDomainco-project/project-db-ui:0.0.10 | Run the docker image
| docker push docker.br.companyDomaineng.io/com-companyDomainco-project/project-db-ui:&lt;version&gt; | Publish docker image to Artifactory - https://repo.br.companyDomaineng.io/artifactory/webapp/#/artifacts/browse/tree/General/docker-prod-local2/com-companyDomainco-project/project-db-ui |