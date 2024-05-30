/*
Guess the word

The user have 3 attempts to guess the word.

Requirements:
- The game must contain a secret word.
- The game can give 1 clue to guess the word.
- The user must enter a assumption.
- The game must check if the user's assumption is correct.
- The game must have a limited number of attempts.
- The game must end when the user guesses the word or has no more attempts.
*/

let secretWord = "oblivion";

const clue = "It's similar to forgot";

let attempts = 3;

function checkAssumption(userAssumption, secretWord) {
  let formattedAssumption = userAssumption.toLowerCase();
  if (formattedAssumption === secretWord) {
    return true;
  } else {
    return false;
  }
}

function guessTheSecretWord() {
  alert("Welcome to Guess the secret word");
  alert(`Instructions: you have ${attempts} to guess the secret word`);
  alert(`Here you have a clue to guess the word: ${clue}`);

  while (attempts > 0) {
    let userAssumption = prompt("Guess the word, enter your answer");

    userAssumption;

    if (checkAssumption(userAssumption, secretWord) === false) {
      attempts--;
      if (attempts > 0) {
        alert(`Try again, you still have ${attempts}`);
      } else {
        alert(`GAME OVER... the secret word was ${secretWord}`);
      }
    } else {
      alert(`You got it, the word is ${secretWord}`);
      break;
    }
  }
}

guessTheSecretWord();
