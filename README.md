# House Automation
I have created this application from scratch using React JS latest features. 

# How to use it
Download the code and got the house-automation folder and run below commands
1. npm install   
2. npm start  to run this project.

#Implementation detail
Source file data.json which provide data to load UI components, Every js/jsx file has its own css. Project is structured as components, Store and Layout.
Once UI components rendered then application configure the context and use state and event handling to take action on data. Update the modified content
with the help of reducer. There is only one object which modifies on user actions and can be send or save in DB. 

# Execution
1. Once application start it laod the dashboard which shows 2 panel. First panel contains layout of house like Bedroom 01, Bedroom 02 and Living Room in
for of Card layout using css. Every card shows data from source file. Second panel contains control panel which manages functionality like Light on/off
Curtain open/close, room temperature increase/decrease.
2. Selecting checkbox for Light represents Light-On and uncheck means Light-off
3. Selecting checkbox for Curtain represents Curtain-Open and uncheck means Curtain close
4. There are +/1 button which controls temperature, once temperature reaches to 70 the it changes color to red else shows blue

# Debugging / Loging
1. In developer tool data scource can be seen, which is updating as per user action and it logs the required information. I have commented console.logs to 
show the out clear

Thanks 


