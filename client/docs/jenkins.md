## Jenkins

**Approval to INT and PROD**  
The Jenkins pipeline has been configured to require approval for promoting deployments to INT and PROD.  
These tasks shouldn't be performed by the developers and should be left to the business users.

**Useful Jenkins links:**\
https://jenkins.io/doc/tutorials/build-a-node-js-and-react-app-with-npm/  
https://wiki.jenkins.io/display/JENKINS/Parameterized+Build  
Install Green Balls plugin to change successful build color from blue to green:  
https://www.theserverside.com/video/Jenkins-creator-explains-why-a-successful-build-job-is-blue

**Configure Slack to receive build status notifications**
This was done is 2 steps -  
1: Installing the slack-plugin inside Jenkins and configuring Jenkins (Manage Jenkins -> Configure System)  
https://github.com/jenkinsci/slack-plugin#install-instructions-for-slack  
If one follows above install instructions, they will be presented with the following links where one can get the secret text for **Integration Token Credential ID** to be used in Jenkins configuration.  
https://domain.slack.com/apps/new/A0F7VRFKN-jenkins-ci  
https://domain.slack.com/services/BMN0YQX0C?added=1  
E.g. Jenkins Configuration where slack channel, etc. is configured, http://jenkins.devel.mp-project.brnp.internal/configure  
2: Use slackSend method in the Jenkinsfile to send the notification to slack  
Additional link: https://mfarache.github.io/mfarache/Chatops-Slack-Jenkins-integration/

**Adding npm to Jenkins to run tests**  
1 - Add NodeJS plugin - https://wiki.jenkins.io/display/JENKINS/NodeJS+Plugin  
2 - Follow instructions from above plugin page and add NodeJS under **Global Tool Configuration**  
 Make a note of the name used in this step as the name has to be specified in step 3 below in the Jenkins file.  
3 - Jenkinsfile - refer stage('Run tests') for adding NodeJS to the path so npm can be used to run the tests.

**To run the builds for branches other than master**  
Create a new item/job in jenkins identical to project-db-ui master and change the branch to the required branch.
