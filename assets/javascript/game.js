var goku = {
	name: "Goku",
	health: 175,
	attackPower: 12,
	attackAdd: 12,
	counterAtk: 17,
}

var frieza = {
	name: "Frieza",
	health: 140,
	attackPower: 14,
	attackAdd: 14,
	counterAtk: 19,
}

var vegeta = {
	name: "Vegeta",
	health: 180,
	attackPower: 10,
	attackAdd: 10, 
	counterAtk: 18,
}

var piccolo = { 
	name: "Piccolo",
	health: 250, 
	attackPower: 11,
	attackAdd: 11, 
	counterAtk: 15, 
}

var chosen; 
var badGuy;
function choosePlayer() {
		$('.enemey').append($('.toChoose'));
		$('.chosen').append(this);
		chosen = $(this).attr('id');
		
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
		$('#chosenHealth').html(chosen.health);
		$('.toChoose').on('click', pickEnemy);


}

function pickEnemy (){
		$('.toFight').append(this);
		badGuy = $(this).attr('id');
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
		$('#badGuyHealth').html(badGuy.health)
		$('.info').html("You think you can beat the mighty " + badGuy.name + "!");
		$('.fight-info').append('<button class="btn-attack btn btn-danger">Attack</button>');
		$('.btn-attack').click(attack);

}
if(badGuy != "undefined"){
	$('.toChoose').click(function(){
    	$('.toChoose').unbind('click', pickEnemy);
    });
}



function attack () { 
	badGuy.health -= chosen.attackPower;
	chosen.health -= badGuy.counterAtk;
	chosen.attackPower += chosen.attackAdd; 
	$('.toFight .health').html(badGuy.health);
	$('.chosen .health').html(chosen.health);
	$('.attack-info').html("You attacked " + badGuy.name + " for " + chosen.attackPower);
	$('.counter-attack-info').html("You we're counter attacked by " + badGuy.name + " for " + badGuy.counterAtk);

	if(chosen.health < 1 || badGuy.health < 1) { 
		if(chosen.health < 1) { 
			$('.info').html("You have lost the fight!");
			$('.btn-attack').remove();
			$('.fight-info').append('<button class="restart btn btn-danger">Restart</button>');
			$('.restart').click(restart);
		} else if (badGuy.health < 1){ 
			$('.info').html("You have beaten " + badGuy.name + "!");
			$('.toFight div').remove();
			$('.btn-attack').remove();
			$('.toChoose').on('click', pickEnemy);
		}
		if($('.enemey div').length== 0 && badGuy.health < 1) {
			$('.info').html("You have won the fight!");
			$('.btn-attack').remove();
			$('.fight-info').append('<button class="restart btn btn-danger">Restart</button>');
			$('.restart').click(restart);


		}
	}
}
if(badGuy == 'undefined'){
	$('.btn-attack').remove();
}
function restart() {
	location.reload();
	
}

$(document).ready(function(){
		$('.toChoose').on('click', choosePlayer);
		$('.toChoose').click(function(){
        $('.toChoose').unbind('click', choosePlayer);
     });
		
});