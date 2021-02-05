//Kjernen av scriptet. Alternerer tur for spillere, og endrer knapper i DOM
const byttTur = (() => {
	let vunnet = 0;
	var ruter = [];
	let player1 = [];
	let player2 = [];
	let currentPlayer = 'O';

	//Legger til indeksert rute inn i rute-matrisen
	var leggTil = x => {
		ruter.push(x);
	}
	//Legger til indeksert rute inn i spiller-matrisen
	var spillerTrekk = (a, b) => {
		a.push(b);
	}
	//Mottar input fra DOM, sjekker om trekket er i rute-matrisen, sjekker hvilken spiller som sist spilte og skifter spillertur. 
	var turBytte = function turBytte(klikk) {
		let prevPlayer = currentPlayer;
		if ((ruter.includes(klikk))||(vunnet>0)) {
			console.log("Ulovlig trekk ⚠️");
			document.getElementById("statusDisplay").innerHTML = "Ulovlig trekk ⚠️";
			return;
		}
		if (currentPlayer === 'X') {
			currentPlayer = 'O';
			prevPlayer = 'X';
			spillerTrekk(player1, klikk);
			if (sjekkVinner(player1, currentPlayer)){
				vunnet = 1;
			}
			
		} else {
			currentPlayer = 'X';
			prevPlayer = 'O';
			spillerTrekk(player2, klikk);
			if (sjekkVinner(player2, currentPlayer)){
				vunnet = 1;
			}
		}
		//Endrer innhold i DOM element til 'X' eller 'O'
		document.getElementById(klikk).innerHTML = currentPlayer;
		if (vunnet>0) {
			document.getElementById("turDisplay").innerHTML = "🔚";
		} else {
			document.getElementById("turDisplay").innerHTML = prevPlayer;
		}
		leggTil(klikk);

		return {currentPlayer, ruter};
	};
	return {
		turBytte: turBytte
	};
})();

//Ser om enten av spillerne oppfyller et av vilkårene for å vinne runden. (kan gjøres om til en foreach loop.)
const sjekkVinner = (spiller, navn) => {
	var vinner = () => {
		document.getElementById("statusDisplay").innerHTML = `Seieren går til ${navn}✨`;
		console.log(`✨Seieren går til ${navn}`);
		
		return true;
	}
	if ((spiller.includes('a'))&&(spiller.includes('b'))&&(spiller.includes('c'))) {
		vinner();
		return true;
	}
	if ((spiller.includes('d'))&&(spiller.includes('e'))&&(spiller.includes('f'))) {
		vinner();
		return true;
	}
	if ((spiller.includes('g'))&&(spiller.includes('h'))&&(spiller.includes('i'))) {
		vinner();
		return true;
	}
	if ((spiller.includes('a'))&&(spiller.includes('d'))&&(spiller.includes('g'))) {
		vinner();
		return true;
	}
	if ((spiller.includes('b'))&&(spiller.includes('e'))&&(spiller.includes('h'))) {
		vinner();
		return true;
	}
	if ((spiller.includes('c'))&&(spiller.includes('f'))&&(spiller.includes('i'))) {
		vinner();
		return true;
	}
	if ((spiller.includes('a'))&&(spiller.includes('e'))&&(spiller.includes('i'))) {
		vinner();
		return true;
	}
	if ((spiller.includes('c'))&&(spiller.includes('e'))&&(spiller.includes('g'))) {
		vinner();
		return true;
	}
	return false;
}


// spillebrettet skal lagres som en matrise inne i spillBrett objektet. Spillerne lagres i objekter og sannsynligvis skal et objekt kontrollere flyten i spillet.

//Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.

//Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that congratulates the winning player!

//Optional - If you’re feeling ambitious create an AI so that a player can play against the computer! 



// vil legge inn 'X' inn i liste-prototyp på den spesiferte indeks (i parentesen er indeks først, den slettede i indeksen etterpå, sist er objektet som settes inn.
// liste.splice(1, 1, 'X');
 
//index splicingen vil foregå ved at jeg bruker en event listener til å hente ID fra DOM. IDen kan enkelt passeres inn i listePrototyp.splice().

//            ['a', 'b', 'c',
//             'd', 'e', 'f', 
//             'g', 'h', 'i'];

/*             {a, b, c, 
             d, e, f,
            g, h, i}; */



// console.log(ruter.includes('a')); //true/false