Feature: KIA Customer Web Portal feature



#With Examples keyword
Scenario Outline: KIA Customer Web Portal Smoke Testcases

Given user is on KIA web portal Landing Page       					
When  page title is Kia Owners Portal  
Then user clicks the Sign in button							
Then user enter the "<username>" and "<password>"				
Then user clicks the login button
#Then user is on welcome page
#Then user pick the vehicle 
Then user is on dashboard page
Then fetch the name of the vehicle	
Then get the status of the door
Then user clicks the lockUnlock option
Then user clicks the remoteClimate option
Then user find the vehicle location
#Then capture the alert message	
#Then close the browser	


Examples:
	
		|     username				| password  |
	    | jfpe93@mailinator.com     | Password1 |
	    |  kia.haea1@gmail.com      | Password1 |
	
	   