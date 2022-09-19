


/*  testing above code.


function playGuessingGame(x, y) {
  //  let numToGuess = randomNum = Math.random() * 11 | 0;
//    let totalGuesses = 10;
    //  let guesses = 0;
    
    // function playGuessingGame(numToGuess, totalGuesses = 10){
    
      let promptText = "Enter a number between 1 and 100.";
    
      //for loop. Checks to see if the user doesn't enter anything
      //or if the user enters a number that is not a number
    
    for (guesses = 1; guesses < totalGuesses; guesses++) {
    
    //  for (guesses = 1; guesses < totalGuesses) {
        // removed counter for guesses and added to each if statement
        //check if the user doesn't enter anything.  If they do not enter anything, exist
        let num = prompt(promptText);
    
        if (num === null) {
          guesses = 0;
          return 0;
        }
    
        // checks to see if the value they entered is a number
        else if (num === "" || isNaN(num)) {
          promptText = "Please enter a number";
          // do not need if I remove the counter from the for statement
          //guesses--;
        } else if (num > numToGuess) {
          //guesses++;
          promptText = "Please enter a number";
          userGuess = prompt(num + " is too large. Guess a smaller number.");
        } else if (num < numToGuess) {
          //guesses++;
          promptText = "Please enter a number";
          userGuess = prompt(num + " is too small. Guess a smaller number.");
        }  else
          guesses = 0;
          promptText = "You failed to guess the number.";
    
      return guesses;
      //}
    
        var randomNum = Math.random() * 11 | 0,
    
    
      //console.log("The random number is: " + randomNum);
     // totalGuesses = prompt("How many guesses would you like to make?")
    
      // playGuessingGame(randomNum, totalGuesses)
    
      let countAttempts = 0;
      countAttempts = playGuessingGame(7, 8);
    
      console.log("You took " + countAttempts + " attempts to guess the number.");
    

*/


/*  intial code

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
End of initial code  */
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