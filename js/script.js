

let argButtonName;

var buttonRock = document.getElementById('button-rock')
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });

var buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });

var buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

/**
 * Describe this function...
 */
function buttonclicked(argButtonName) {
	clearMessage();
	console.log(argButtonName + 'został kliknięty');
}

/**
 * Describe this function...
 */
let argMoveId;
function getMoveName(argMoveId) {
	console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
	if (argMoveID == 1) {
		return 'kamień';
	} else if (argMoveId == 2) {
		return 'papier';
	} else if (argMoveId == 3) {
		return 'nożyce';
	} else {
		printMessage('Nie znam ruchu o id ' + argMoveId + '.Zakładam, że chodziło o "kamień".');
		return 'kamień';
	}
	
}