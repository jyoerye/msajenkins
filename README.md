{\rtf1\ansi\ansicpg1252\cocoartf1504\cocoasubrtf810
{\fonttbl\f0\fnil\fcharset0 Monaco;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww20740\viewh12440\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs22 \cf0 Goal:\
To do Continuous  Integration and \ul Continous\ulnone  deployment using \ul Jenkins\ulnone  and Docker.\
\
Description:\
The application uses Angular front end with \ul Springboot\ulnone  \ul backend\ulnone  and H2Db for data persistence.\
\
To run the application:\
1. \ul Pre\ulnone  requisite: Install docker\
\
2. Clone the \ul github\ulnone  repository\
3. Open the terminal\
4. Navigate to \ul jenkinsrepo\ulnone  and run the following commands\
   docker volume create --name=jenkins_home\
   docker-compose up\
\
The above  command will run \ul jenkins\ulnone  on port 8080.\
If \ul github\ulnone  and nodejs does not get installed as a \ul plugin\ulnone  in \ul Jenkins\ulnone  then install it through \ul Jenkins\ulnone .\
\
6. Create a new job in \ul Jenkins\ulnone \
7. In source code management   give  the URL of GitRepository.\
8. navigate down to Execute shell and type in the following commands:\
	\ul cd\ulnone  angular-client\
	\ul npm\ulnone  \ul config\ulnone  set registry http://registry.npmjs.org/ --global	\
	\ul npm\ulnone  \ul config\ulnone  set \ul proxy\ulnone  false\
	\ul npm\ulnone  cache clean\
	\ul npm\ulnone  install\
	\ul ng\ulnone  build	\
	\ul cd\ulnone  ..\
	\ul cd\ulnone  docker-demo-master\
	\ul sudo\ulnone  ./\ul gradlew\ulnone  clean buildDocker	\
	\ul cd\ulnone  ..\
	\ul sudo\ulnone  docker-compose build --no-cache\
	\ul sudo\ulnone  docker-compose up -d --force-recreate\
	\
	\
\
\
\
\
\
}