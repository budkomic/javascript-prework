

let argButtonName;

var buttonRock = document.getElementById('button-rock')
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });

var buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });

var buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

