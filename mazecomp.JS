//Programmer: James Maher
//Team Member: Max Moss
//Date ID: 4.16.2024
//Program: mazecomp
//program url: https://edu.sphero.com/program/16788343/edit

async function startProgram() {
	// Programmer: Maxwell Moss - Start Text & Audio Checkpoint Commit - Date:
	await scrollMatrixText('Start', { r: 255, g: 255, b: 255 }, 15, true);
	await speak("Start", true);

	// Programmer:James maher -blue led checkpoint commit
	setMainLed({r:0, g:0, b:255});
	await roll((getHeading() + 0), 50, 3.3);





	// Programmer: -sound one checkpoint commit




	// Programmer: -red led checkpoint commit




	// Programmer: -sound two checkpoint commit




	// Programmer: -green led checkpoint commit





	// Programmer: -purple led & sound three checkpoint commit




	// Programmer: -Finish text and audio commit
}