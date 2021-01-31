//globale 


//factory function
const spillBrett = () => {
    const player1 = "X";
    const player2 = "O";
	var ruter = [];
    return {ruter, player1, player2};
}
console.log(spillBrett());

//Alternerer tur for spillere, og endrer knapper i DOM
const byttTur = (() => {
	var currentPlayer = 'X';
	var turBytte = function turBytte(klikk) {
		if (currentPlayer === 'X') {
			currentPlayer = 'O';
		} else 
			currentPlayer = 'X';
		//Endrer innhold i DOM element til 'X' eller 'O'
		saus =	document.getElementById(klikk).innerHTML = currentPlayer;
		return currentPlayer;
	};
	return {
		turBytte: turBytte
	};
})();

//modul
var APP = (function module() {
	var a = 3;
	
	var printIt = function printIt(val) {
		console.log(val)
	};
	
	var sumIt = function sumIt(b) {
		printIt(a + b);
	};
	
	var multiplyIt = function multiplyIt(b) {
		printIt(a * b);
	};
	
	return {
		sumIt: sumIt,
		multiplyIt: multiplyIt
	};
}());


// spillebrettet skal lagres som en matrise inne i spillBrett objektet. Spillerne lagres i objekter og sannsynligvis skal et objekt kontrollere flyten i spillet.

    //Your main goal here is to have as little global code as possible. Try tucking everything away inside of a module or factory. Rule of thumb: if you only ever need ONE of something
    //(gameBoard, displayController), use a module. If you need multiples of something (players!), create them with factories.

//Set up your HTML and write a JavaScript function that will render the contents of the gameboard array to the webpage (for now you can just manually fill in the array with "X"s and "O"s)

//Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, letting players click on the gameboard to place their marker.
//Don’t forget the logic that keeps players from playing in spots that are already taken! 

    //Think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit in the game, player or gameboard objects.. 
    //but take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later!

//Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.

//Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that congratulates the winning player!

//Optional - If you’re feeling ambitious create an AI so that a player can play against the computer! 



// vil legge inn 'X' inn i liste-prototyp på den spesiferte indeks (i parentesen er indeks først, den slettede i indeksen etterpå, sist er objektet som settes inn.).
// liste.splice(1, 1, 'X');
 
//index splicingen vil foregå ved at jeg bruker en event listener til å hente ID fra DOM. IDen kan enkelt passeres inn i listePrototyp.splice().

//            ['a', 'b', 'c',
//             'd', 'e', 'f', 
//             'g', 'h', 'i'];

/*             {a, b, c, 
             d, e, f,
            g, h, i}; */



// console.log(ruter.includes('a')); //true/false


// Vinnerbetingelsen: 1: a, b, c / d, e, f / g, h, i / a, d, g / b, e, h / c, f, i / a, e, i / c, e, g 