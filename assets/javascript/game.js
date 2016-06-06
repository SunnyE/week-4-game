var goku = {
	name: "Goku",
	health: 175,
	attackPower: 18,
	attckAdd: 18,
	counterAtk: 21,
}

var frieza = {
	name: "Frieza",
	health: 140,
	attackPower: 25,
	attackAdd: 25,
	counterAtk: 24,
}

var vegeta = {
	name: "Vegeta",
	health: 180,
	attackPower: 16,
	attackAdd: 16, 
	counterAtk: 19,
}

var piccolo = { 
	name: "Piccolo",
	health: 250, 
	attackPower: 12,
	attackAdd: 12, 
	counterAtk: 14, 
}

var chosen; 
var badGuy;
function choosePlayer() {
		$('.chosen').append(this);
		chosen = $(this).attr('id');
		$('.enemey').append($('charlist'));

	
}

function pickEnemy {
		$('.toFight').append(this);
		badGuy = $(this).attr('id');
	}


function readyTheField () {
	if (chosen == "piccolo") {
		chosen = piccolo;
	} 
	if (chosen == "vegeta") {
		chosen = vegeta;
	} 
	if (chosen == "goku") {
		chosen = goku;
	} 
	if (chosen == "frieza") {
		chosen = frieza;
	} 
	if (badGuy == "frieza") {
		badGuy = frieza;
	} 
	if (badGuy == "goku") {
		badGuy = goku;
	}
	if (badGuy == "vegeta") {
		badGuy = vegeta;
	}
	if (badGuy == "piccolo") {
		badGuy = piccolo;
	}  
}

function attack () { 
	
}



$(document).ready(function(){




});