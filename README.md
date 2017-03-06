## Goal
To do Continuous  Integration and Continous deployment using Jenkins and Docker.

## Description
The application uses Angular front end with Springboot backend and H2Db for data persistence.

## To run the application
1. Pre requisite: Install docker
2. Clone the github repository
3. Open the terminal
4. Navigate to jenkinsrepo and run the following commands
```
   docker volume create --name=jenkins_home
   docker-compose up
```
The above  command will run jenkins on port 8080.
If github does not get installed as a plugin in Jenkins then install it through Jenkins.

6. Create a new job in Jenkins
7. In source code management   give  the URL of GitRepository.
8. navigate down to Execute shell and type in the following commands:
```
	cd angular-client
	npm config set registry http://registry.npmjs.org/ --global	
	npm config set proxy false
	npm cache clean
	npm install
	ng build	
	cd ..
	cd docker-demo-master
	sudo ./gradlew clean buildDocker	
	cd ..
	sudo docker-compose build --no-cache
	sudo docker-compose up -d --force-recreate
```	
	





