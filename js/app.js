$(document).ready(function(){

// GRABS RANDOM NUMBER
// function getRandomNbr(min, max) {
// 	return Math.floor(Math.random()*100) + 1;
// }

// COUNTER FOR AMOUNT OF GUESSES
	var counter = 0;

	var button = document.getElementById('guessButton');
	var display = document.getElementById('count');

	button.onclick = function(){
		count ++;
		display.innerHTML = count;
	}

// LISTS GUESSED NUMBERS
	$('form').submit(function (e) {
		e.preventDefault();
		var toAdd = $("input[name=userGuess]").val();
		$(".guessBox").append("<li>" + " " + toAdd + "</li>");
		$('#userGuess').val('');
	});
	



// function newGame(){
// 	document.getElementById('game').style.display = //NEW GAME SCREEN;
	//regenerate new number to guess
// }


	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


