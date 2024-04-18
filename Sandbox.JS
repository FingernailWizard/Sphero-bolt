//Programmer: James Maher
//Team Member: Max Moss
//Date ID: 4.16.2024
//Program: Hello world - Sandbox
//program url: https://edu.sphero.com/program/16700427/edit

async function startProgram() {
	await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(60);
	await delay (2);
	setSpeed(0);

}
