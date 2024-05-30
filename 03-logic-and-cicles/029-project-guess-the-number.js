const secretNumber = Math.floor(Math.random() * 100 + 1);

const playerNumber = parseInt(prompt("Guest the secret number between"));

console.log(`This is the number which you're playing with: ${playerNumber}`);

if (playerNumber === secretNumber) {
  console.log("You get it!!");
} else if (playerNumber < secretNumber) {
  console.log("Your number is less, try again");
} else {
  console.log("Your number is greater, try again");
}
