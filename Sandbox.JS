//Programmer: James Maher
//Team Member: Max Moss
//Date ID: 4.16.2024
//Program: Hello world - Sandbox
//program url: https://edu.sphero.com/program/16700427/edit

/*
async function startProgram() {
	await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(60);
	await delay (2);
	setSpeed(0);
*/
/*
async function startProgram() {

	setMainLed({ r: 0, g: 100, b: 255 });

	await speak("hi", true);

	await delay(1);

	for (var Bolt = 0; Bolt < 4; Bolt++) {

		setMainLed(getRandomColor());

		await Sound.Game.Coin.play(true);

		await roll((getHeading() + 90), 60, 1);

		await delay(1);
}
*/


async function startProgram() {
	await roll(450, 60, );

}
