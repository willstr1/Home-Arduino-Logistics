/*
This file is part of the Home Arduino Logistics skill for Amazon Echo. If you have an questions please see the documentation included with the download or visit my website www.willstr1.com
*/
//this is the customizable section of the code please fill out the switch statments to fit your devices and commands 
//for devices
function getDevice(device, response) {
	var nearDev = '';
	switch(device) {
		case "device2": //replace device2 with what ever you will call your second device (arduino) if you have one
			nearDev = 'NB######';	//replace NB###### with the device ID (given by nearbus) of your second arduino
			break;
		case "device3":
			nearDev = 'NB######';
			break;
		default:
			response.tellWithCard("unknown device","Unkown Device","Device: " + device);
			break;
		}
	return nearDev;
}
exports.getDevice = getDevice;
//for commands
function getCmd(command, response) {
	var nearCmd = '';
	switch(command) {
		//the names for command 1
		case "pause":
		case "play":
			nearCmd = '1';
			break;
		//the names for command 2
		case "power":
		case "on":
		case "off":
			nearCmd = '2';
			break;
		//put in additional sets of command names for additional commands
		default:
			response.tellWithCard("unknown command", "Unkown Command","Command: " + command);
			break;
		}
	return nearCmd;
}
exports.getCmd = getCmd;
