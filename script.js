function playGuessingGame() {
	// generates a wghole number up to the max 100
	let numToGuess = Math.floor(Math.random() * 11) ;

	// output to the console for debugging
	console.log(numToGuess);

	let userGuess = prompt("Please enter a number between 0 and 100");
	console.log("Your guess is: " + guess);
	
    	if (isNaN(userGuess) === true) {
      	   console.log("Please enter a number.");
      	   let userGuess = prompt("Enter a number between 1 and 100.");
	} else if (userGuess < 0) {
	   window.alert("Your guess is too low. Enter a number between 1-100")
	} else if (userGuess > 100) {
	   window.alert("Your guess is too high. Enter a number between 1-100")
	} else if (userGuess == numToGuess) {
	} else if (userGuess < numToGuess) {
	   window.alert("Your guess is too low")
	} else if (userGuess > numToGuess) {
	   window.alert("Your guess is too high")
	} else if (userGuess == numToGuess) {
	   window.alert("You guessed the number")
	} else {
	   window.alert("You did not enter a valid number")
   }

}

// call the function
playGuessingGame();  }
   

   // return (guessCount); 
 }ttempts.");
       }
    }

    return (guessCount);
 }