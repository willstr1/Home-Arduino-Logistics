//define switch statments 
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
			response.askWithCard("we have not been introduced yet", "anything else", "Unkown Device","Device: " + device);
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
		case "power":
			nearCmd = '1';
			break;
		case "pause":
		case "play":
			nearCmd = '2';
			break;
		//put in additional sets of command names for additional commands
		default:
			response.askWithCard("I have not learned that one yet", "anything else", "Unkown Command","Command: " + command);
			break;
		}
	return nearCmd;
}
exports.getCmd = getCmd;
