//Programmer: James Maher
//Team Member: Max Moss
//Date ID: 4.16.2024
//Program: Hello world - Sandbox
//program url: https://edu.sphero.com/program/16752575/edit

//Maxwell Moss
async function startProgram() {
	setMainLed({ r:0, g:0, b:255});
	await speak("Imma beat this thing")
	await roll((getHeading() + 0), 40, 1);
	await roll((getHeading() + 45), 80, 1);
	//James Maher
	await delay(1);
	setMainLed({r:10, g:100, b:115});
	await roll((getHeading() - 10), 80, 1);
}