
$(document).ready(function(){
	var counter = 0;
	var secretNumber;

	var button = document.getElementById('guessButton');
	var display = document.getElementById('count');

//New Game - Clears Counter
	function newGame(){
		secretNumber = Math.floor(Math.random()*100) + 1; //Gernerates #
		//console.log('secretNumber', secretNumber); shows secret number in console.

		counter = 0;
		display.innerHTML = counter;

		$('.guessBox').html(''); //resets html and results

		document.getElementById('feedback').innerHTML = "Make Your Guess!";

	}

// GRABS RANDOM NUMBER
	function getRandomNbr(min, max) {
		return Math.floor(Math.random()*100) + 1;

	}

// COUNTER FOR AMOUNT OF GUESSES

	button.onclick = function(){
		counter ++;
		display.innerHTML = counter;
	}

// LISTS GUESSED NUMBERS
	$('form').submit(function (e) {
		e.preventDefault();
		var guess = $("input[name=userGuess]").val();
		guessNumber(guess);
		$(".guessBox").append("<li>" + " " + guess + "</li>");
		$('#userGuess').val('');
	});

//check guessed number

	function guessNumber(number){
		var diff = Math.abs(secretNumber - number); 
		
		if(secretNumber == number){
			document.getElementById('feedback').innerHTML = "You Win!";
		}
		else if(diff <= 5){
			document.getElementById('feedback').innerHTML = "FIRE!";
		}
		else if(diff <= 10){
			document.getElementById('feedback').innerHTML = "Getting Warmer!";
		}
		else if(diff <= 20){
			document.getElementById('feedback').innerHTML = "Cold";
		}
		else if(diff <= 50){
			document.getElementById('feedback').innerHTML = "FREEZING!";
		}
		else if(diff > 50){
			document.getElementById('feedback').innerHTML = "You are going to have to do better than that!"
		}
	}
//supply feedback

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


