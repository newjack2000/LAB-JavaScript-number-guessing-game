//function playGuessingGame() {
	// generates a wghole number up to the max 100
// creating a function to check whether the userinput and the variable is same on the click of a button.

     // random number generation, value up to 100
   numToGuess = Math.floor(Math.random() * 100 + 1)
   totalGuesses = 10; // default value
   guessCount = 1;

   userGuess = x;
   totalGuesses = y;

// adding a comment to see if it will allow me to update
   userGuess = prompt("Enter a number between 1 and 100.");
   while (guessCount !== totalGuesses) {
      if (userGuess > numToGuess) {
         console.log(x + "is too large. Guess a smaller number.");
         guessCount ++;
      }

      else if (userGuess < numToGuess) {
         console.log(x + "is too small. Guess a larger number.");
         guessCount ++;
      }

      else if (userGuess === isNaN) {
         console.log("Please enter a number.");
      }

      if (userGuess == numToGuess) {
         console.log("Congatadulations! " + x + " is the correct number!  You guessed the correct number in " + guessCount +" attempts.");
      }
   }

  /*
document.getElementById("submit").onclick=()=>{

// getting the value of a textbox
let guess=document.getElementById('text').value;

let GuessNumber=5;
    
    // if the user input and the number is same just display gift
    if(guess==GuessNumber){
        document.getElementById("P").innerHTML="Gift";
}

    // if the user input is not a number display 'it should be a number'
    else if(isNaN(guess)){
        document.getElementById("P").innerHTML="It should be a number";
}

    // if the user input is a number greater than 10 or less than 1 display 'it is a number between 1 and 10.
    else if(guess>11||guess<0){
        document.getElementById("P").innerHTML="It is a number between 1 and 10. Not beyond 10 or below"

}

    // or if it is not same as the guess number display 'better luck next time'
    else{
    document.getElementById("P").innerHTML="Better luck next time";
}  */
//}
// call the function
//playGuessingGame();