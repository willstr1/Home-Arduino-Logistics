# Home-Arduino-Logistics
An Amazon Echo Skill that allows you to send simple commands to an internet connected Arduino 

For more info check out my website www.willstr1.com
<p/>
<h2>Setup instructions:</h2>
1.	Set up NearBus on your Arduino
  1.	Create a NearBus account
  2.	Follow the instructions there to do the hello world program for your device
2.	Set up the Echo skill
  1.	Link it to your lambda function
  2.	Use the input json and sample invokes I have given (modify the sample invokes if you want)
3.	Modify the lambda code (in the lambda folder) with your information
  1.	Your App info (near the top of the index file)
    *	APP_ID
  2.	Your login info (near the top of the index file)
    *	nearUser
    *	nearPass
  3.	Your default device info (near the top of the index file)
    *	nearDevD
  4.	Your switch statements (in the userFunctions file)
    *	getDevice – use to define what your additional devices are (what device ID (nearDev) to send the commands to if you specify a device name in an invoke)
    *	getCmd – use to define what your commands are (what their command number (nearCmd) is and what their possible invoke names are)
4.	Upload the lambda code to lambda
  1.	Save your modifications to the code
  2.	Go to the folder that has your js files (the index.js, AlexaSkills.js, and userFunctions.js files)
  3.	Select all three files
  4.	Compress them into one zip folder (in windows right click, Send to, Compressed (zipped) folder)
  5.	Go to Lambda and open your HAL function (make one if you haven’t already)
  6.	Set code entry type to “Upload a .ZIP file”
  7.	Press upload and then select the zip file with your code in it
  8.	Save the function
5.	Modify the Arduino code (in the Arduino Folder)
  1.	Your login info (near the top of the HAL-Y.ino/HAL-E.ino/HAL-W.ino (depending on what network method you are using) file)
    *	deviceId [] – the device ID given to your device by NearBus
    *	sharedSecret [] – the shared secret set to your device by NearBus
  2.	Additional info for your network (near the top of the HAL-Y.ino/HAL-E.ino/HAL-W.ino (depending on what network method you are using) file, only some fields are needed for some of the methods)
    *	mac[6] – the Arduino’s Ethernet shield’s MAC Address – for Ethernet
    *	ip[] – static IP if Arduino can’t find DHCP – for Ethernet
    *	subnet[] – subnet mask if Arduino can’t find DHCP – for Ethernet
    *	gateway[] – default gateway if Arduino can’t find DHCP – for Ethernet
    *	ssid[] – your network SSID – for Wifi
    *	pass[] – your network password – for Wifi
  3.	Your commands (in the mainSwitch function in userFunctions.ino)
6.	Upload the Arduino code to your Arduino
7.	Test everything
8.	Enjoy!

<h2>Usage:</h2>
Use it for anything you can think of and code. Home automation, voice activated universal remote, water the plants, anything you can design your Arduino to do. Just unleash your inner Tony Stark and build your JARVIS. The only limits are that the commands are currently simple commands (just numbers calling the functions) it can’t forward a bunch of data and it is only one way (because the Echo doesn’t take inputs right now).  

<h2>Resources:</h2>
*	Arduino https://www.arduino.cc/ 
*	Echo Roku Voice Control https://github.com/MrEggsalad/Echo-Roku-Voice-Control 
*	NearBus http://www.nearbus.net/ 
*	Echo https://developer.amazon.com/public/solutions/devices/echo 

<h2>Tools:</h2>
*	Sublime http://www.sublimetext.com/3 
*	Arduino plugin for sublime https://packagecontrol.io/packages/Arduino-like%20IDE 
