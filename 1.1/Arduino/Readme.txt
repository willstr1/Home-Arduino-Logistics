There are 3 versions of the Arduino code. Each of them is designed for different ways that the arduino connects to the internet.
Make sure you have the correct one (and that you use the correct NearBus library and setup instructions)
- HAL-E - use this if you are using an ethernet shield to connect to the internet
- HAL-W - use this if you are using a Wi-Fi shield to connect to the internet
- HAL-Y - use this if you are using ether an Arduino Yun or a Yun Shield (such as a Dragino)

Currently unofficially suported connection methods (but should be easy to implement if requested)
- Wifly - I am not currently designing for this but if there is demand I can make one
- GPRS - same as above
But if you want to make a version that supports these go right ahead and if you end up publishing that code please send me a link and I will link you in the read me (so others can get it)
just please respect the licenses of others (such as the people at NearBus) and please remember to link to HAL

Also these should not be that hard to reverse engineer into whatever method you need as long as NearBus has a library for it,
Just look at both my code and the "hello world" example from the NearBus library for your method and you should be able to figure it out.

Note: I only own a Yun so I am not able to test the ethernet or wifi codes to their full extent so please if you use these let me know if you have any bugs so I can help you fix them
