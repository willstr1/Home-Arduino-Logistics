var http = require('http');
var AlexaSkill = require('./AlexaSkill');
var userFunction = require('./userFunction');

//load settings (fill these out to be able to use the program)
var APP_ID = undefined;	//replace with your echo app ID "amzn1.echo-sdk-ams.app.[your-unique-value-here]"
var nearUser = '';	//your user name for nearbus
var nearPass = '';	//your password for nearbus
var nearDevD = '';	//the device ID (from nearbus) for your primary device

//advanced settings (should not be changed)
var nearPort = 80;
var nearHost = 'nearbus.net';
var nearMethod = 'POST';

//initiate global vars
var nearDev = '';
var nearCmd = '';
var nearRID = '0';
var devIn = '';
var cmdIn = '';
var dest = '';
var outS = '';
var outT = '';
var outC = '';
var outR = '';
var found = true;

var HomeLogistics = function () {
	AlexaSkill.call(this, APP_ID);
};

//extend AlexaSkill
HomeLogistics.prototype = Object.create(AlexaSkill.prototype);
HomeLogistics.prototype.constructor = HomeLogistics;

HomeLogistics.prototype.intentHandlers = {
	commandI: function (intent, session, response) {
		function satisfyAlexa() {
			console.log('command sent');
			var logT = 'Host: ' + nearHost + '  Port: ' + String(nearPort) + '  Path: ' + dest + '  Method: ' + nearMethod + '  Request ID: ' + nearRID;
			console.log(logT);
			response.askWithCard(outS, outR, outT, outC);
		};
		//load inputs
		cmdIn = intent.slots.Command.value;
		var dev = intent.slots.Device;
		//if no device defined set to default
		if(dev && dev.value)
		{
			nearDev = userFunction.getDevice(dev.value, response);
		} 
		else {
			nearDev = nearDevD;
		}
		//switch case to get the command ID
		nearCmd = userFunction.getCmd(cmdIn, response);
		//send the command
		//random number gen to create the request ID
		dest = '/v1/api_vmcu_jsb/' + nearDev + '?user=' + nearUser + '&pass=' + nearPass + '&channel=0&service=MY_NBIOS_0&value=' + nearCmd + '&method=POST&reqid=' + nearRID;
		outS = 'got it'; //need to find better wording
		outR = 'anything else';
		outT = 'Command Sent';
		outC = 'Device ID: ' + nearDev + '   Command Heard: ' + cmdIn + '  Command ID: ' + nearCmd;
		var options = {
			hostname: nearHost,
			port: nearPort,
			path: dest,
			Method: nearMethod
		};
		var req = http.request(options, satisfyAlexa);
		req.end();
	},
	//put in an intent for opening a session - opens just responds with a greeting
	open: function (intent, session, response) {
		//respond
		console.log('session opened'); //posibly output a session ID?
		outS = 'hello'; //better greeting?
		outT = 'Session Opened';
		outC = 'To give a command just say Now or Please and then the command name, to close the session just say Thank You';
		outR = 'are you still there';
		response.askWithCard(outS, outR, outT, outC)
	},
	//put in an intent for closing a session
	close: function (intent, session, response) {
		//respond and close
		console.log('session closed'); //possibly output a session ID?
		outS = 'no problem';
		outT = 'Session Closed';
		outC = 'Session Closed by user';
		response.tellWithCard(outS, outT, outC);
	}
};

HomeLogistics.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
	console.log("no intent found requestID: " + launchRequest.requestId + ", sessionID: " + session.sessionId);
	outS = 'I did not understand your request';
	outR = 'are you still there';
	response.ask(outS, outR);
};

exports.handler = function (event, context) {
	var homeLogistics = new HomeLogistics();
	homeLogistics.execute(event, context);
};


