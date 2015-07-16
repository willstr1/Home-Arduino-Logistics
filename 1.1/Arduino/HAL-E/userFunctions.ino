//modify this file with the functions you need to run your commands
//import aditional libraries (ones not used in HAL-E.ino) here


//This is the primary switch that takes the input (your command number) and then does you commands
void mainSwitch(unsigned long cmdNumber)
{
  switch(cmdNumber) {
    case 0:
      Serial.println("locked");
      break;
    case 1:
      Serial.println("Command 1");
      //code for command 1
      break;
    default:
      Serial.println("UNKNOWN COMMAND");
      break;
  }
}

//add aditional functions for your commands here

