# docker-demo
Spring boot sample web application demo with docker. It uses the tutorial given here https://spring.io/guides/gs/accessing-data-rest/ with following modification.

It runs the spring boot application in one container and H2 DB in another container. For this purpose, an application.properties has been added so that the IP address of the VM where docker is running can be specified. So, you need to override the connection URL proeprty as per your environment before building it. 


Steps</br>
1. Install docker and gradle </br>
2. Download the code</br>
3. Update the application.properties </br>
4. gradle buildDocker</br>  
5. docker-compose up</br>

application can be accessed on http://your_vm_IP:8081/
</br>
</br>It will run the spring boot application. Then try to follow instructions here https://spring.io/guides/gs/accessing-data-rest/ to add records in DB and access the added records.


