Project explanantion and demonstration : https://drive.google.com/file/d/1CLWGxH7l3cAHCwOiOBEZYxaIaHFv_flJ/view?usp=sharing

How to Setup the Project Locally :
Download the File and open in any code Editor and open the terminal
1) cd OpeninApp
2) npm i
   
After the creation of node_modules/ 

Go to https://console.cloud.google.com/ .

Create a new Project.

Open that project , go to API and Services . Enable the Gmail API.

Then create OAuthconsent Screen for your project.

Go to create credential and then create oAuthClient ID. While creating enter the redirect uri as https://developers.google.com/oauthplayground/

Download the credentials of the oAuthClient ID , it contains the client_id,client_secret,redirect_uri .

Create a .env file with the following variables

PORT = 
client_id=
client_secret=
redirect_uris=
refresh_token=

To get the refresh_token go to https://developers.google.com/oauthplayground/.

Authorise https://mail.google.com API using your credentials .

LoginIn and you will get your access and refresh token.

To run the application : 
1)node index.js

Demonstration link  :https://drive.google.com/file/d/1CLWGxH7l3cAHCwOiOBEZYxaIaHFv_flJ/view?usp=sharing

Working images: 

Sending an Email to the authenticated user
![image](https://github.com/MridulDhahari/Auto-Generated-Email-Reply-with-Labels/assets/124286703/497deb3b-271a-4f8d-849a-95de74c72882)
An autogenerated response from the authenticated user
![image](https://github.com/MridulDhahari/Auto-Generated-Email-Reply-with-Labels/assets/124286703/2bc6d96d-7c7c-431e-9c00-e8288d29071e)


 
