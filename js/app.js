$(document).ready(function(){

//New Game - Clears Counter
	function newGame(){
		var secretNumber = Math.floor(Math.random()*100) + 1; //Gernerates #
		// console.log('secretNumber', secretNumber); shows secret number in console.

		counter = 0;
		display.innerHTML = counter;

		$('.guessBox').html(''); //resets html and results

	}

// GRABS RANDOM NUMBER
	function getRandomNbr(min, max) {
		return Math.floor(Math.random()*100) + 1;

	}

// COUNTER FOR AMOUNT OF GUESSES
	var counter = 0;

	var button = document.getElementById('guessButton');
	var display = document.getElementById('count');

	button.onclick = function(){
		counter ++;
		display.innerHTML = counter;
	}

// LISTS GUESSED NUMBERS
	$('form').submit(function (e) {
		e.preventDefault();
		var toAdd = $("input[name=userGuess]").val();
		$(".guessBox").append("<li>" + " " + toAdd + "</li>");
		$('#userGuess').val('');
	});
	

//Click New Game 
	$('.new').click(function(){
		newGame();
	})
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	newGame();
});


