 


// Variables for use in game

var options = ['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var computerGuess = options[Math.floor(Math.random()*options.length)]; // computer guess

var wins = 0
var losses = 0

var chances_left = 9;
var guessed = false;

// Captures Key Clicks
document.onkeyup = function(event) {
    if (chances_left == 0 || guessed) return ;
    
    chances_left--;

	// Determines which exact key was selected. Make it lowercase
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// Alerts with user guess
	console.log(userGuess);

	// Alerts with Computer guess
// 	console.log(computerGuess);

	// Covers logic of game
    if (userGuess == computerGuess) {
        guessed = true;
    }
	
	var result;
	if (guessed) result = 'Correctly guessed';
    else if (chances_left > 0) result = chances_left + ' chances left to guess';
    else result = 'Chances finished';
    	
	document.querySelector("#game").innerHTML=result;
	document.querySelector("#guess").innerHTML += ' ' + userGuess;
}

