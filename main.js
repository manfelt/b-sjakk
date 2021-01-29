//factory function
const spillBrett = () => {
    const player1 = "X";
    const player2 = "O";
    var ruter = [];
    return {ruter, player1, player2};
}
console.log(spillBrett());


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


// vil legge inn 'X' inn i liste på den spesiferte indeks (i parentesen er indeks først, den slettede i indeksen etterpå, sist er objektet som settes inn.).
// liste.splice(1, 1, 'X');

//            ['a', 'b', 'c',
//             'd', 'e', 'f', 
//             'g', 'h', 'i'];

/*             {a, b, c, 
             d, e, f,
            g, h, i}; */
