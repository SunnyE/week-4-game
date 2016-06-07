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
		$('#chosenName').html(chosen.name);
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
		$('#badguyName').html(badGuy.name);

}
if(badGuy != "unfined"){
	$('.toChoose').click(function(){
    	$('.toChoose').unbind('click', pickEnemy);
    });
}

function attack () { 
	badGuy.health -= chosen.attackPower;
	chosen.health -= badGuy.counterAtk;
	chosen.attackPower += chosen.attackAdd; 
	$('#chosenHealth').html(chosen.health);
	$('#badGuyHealth').html(badGuy.health);


	if(chosen.health <= 0 || badGuy.health <= 0) { 
		if(chosen.health <= 0) { 
			$('.info').hmtl("You have lost the fight!");
			$('btn-attack').on('click', restart);
		} else { 
			$('.info').html("You have beaten " + badGuy.name + "!");
			$('.toFight div').remove(); 
		}
		if($('.enemey div').length== 0) {
			$('.info').hmtl("You have won the fight!");
			$('btn-attack').on('click', restart);

		}
	}
}

function restart() {
	location.reload();
	$('.btn-attck').on('click', attack);
}

$(document).ready(function(){
		$('.toChoose').on('click', choosePlayer);
		$('.toChoose').click(function(){
        $('.toChoose').unbind('click', choosePlayer);
     });


		$('.btn-attck').click(attack); 


});