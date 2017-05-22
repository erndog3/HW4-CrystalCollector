$(document).ready(function() {
  var Random=Math.floor(Math.random()*101+19)
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120
  $('#randomNumber').html(Random);
  console.log("random number is = " + Random);
  // Appending random number to the randomNumber id in the html doc
  //
  var crystal1= Math.floor(Math.random()*11+1);
  	console.log('Crystal 1 Random value is = ' + crystal1)
  var crystal2= Math.floor(Math.random()*11+1);
  	console.log('Crystal 2 Random value is = ' + crystal2)
  var crystal3= Math.floor(Math.random()*11+1);
  	console.log('Crystal 3 Random value is = ' + crystal3)
  var crystal4= Math.floor(Math.random()*11+1);
  	console.log('Crystal 4 Random value is = ' + crystal4)

// declaring variables that show the player status: score, wins losses.
var userTotal = 0;
 console.log()
var wins = 0;
var Losses = 0;

//so HTML will dynamically update display wins and losses
$('#numberWins').html(wins);
$('#numberLosses').html(Losses);

//lines 22-31 is a reset function - resets the entire game
function reset() {
	var Random=Math.floor(Math.random()*101+19);
	$('#randomNumber').html(Random);
	var crystal1= Math.floor(Math.random()*11+1);
  	var crystal2= Math.floor(Math.random()*11+1);
  	var crystal3= Math.floor(Math.random()*11+1);
  	var crystal4= Math.floor(Math.random()*11+1);
  	userTotal= 0;
  	$('#finalTotal').html(userTotal);
  }
function addsWins() {
	alert('YOU WIN');
	wins++;
	$('#numberWins').html(wins);
	reset();
}
function addsLosses() {
	alert('YOU LOSE');
	losses++;
	$('#numberLosses').html(Losses);
	reset();
}

$('#one').on ('click',function() {
	userTotal = userTotal + crystal1;
	$('#finalTotal').html(userTotal);
		if(userTotal === Random) {
		addsWins();	
		}
		else if (userTotal > Random) {
			loser();
		}
})
$('#two').on ('click',function() {
	userTotal = userTotal + crystal2;
	$('#finalTotal').html(userTotal);
		if(userTotal === Random) {
			addsWins();	
		}
		else if (userTotal > Random) {
			loser();
		}
})
$('#three').on ('click',function() {
	userTotal = userTotal + crystal3;
	$('#finalTotal').html(userTotal);
		if(userTotal === Random) {
			addsWins();	
		}
		else if (userTotal > Random) {
			loser();
		}
})
$('#four').on ('click',function() {
	userTotal = userTotal + crystal4;
	$('#finalTotal').html(userTotal);
		if(userTotal === Random) {
		addsWins();	
		}
		else if (userTotal > Random) {
			loser();
		}
	});
});

