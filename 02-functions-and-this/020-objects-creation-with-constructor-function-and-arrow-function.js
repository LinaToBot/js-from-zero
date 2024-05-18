// CONSTRUCTOR FUNCTION TO CREATE AN OBJECT

function Rocket(name, ownMessage) {
  // the function name must be in upper case
  this.name = name;
  this.launchMessage = function () {
    console.log(ownMessage);
  };
}

const falcon11Rocket = new Rocket("Falcon 11", "Bye");
const falconHeavyRocket = new Rocket("Falcon Heavy", "See you!!!");

// console.log(falcon11Rocket, falconHeavyRocket); // Rocket { name: 'Falcon 11', launchMessage: [Function (anonymous)] } Rocket { name: 'Falcon Heavy', launchMessage: [Function (anonymous)] }
console.log(falcon11Rocket.launchMessage()); // Bye undefined
console.log(falconHeavyRocket.name); // Falcon Heavy
console.log(falconHeavyRocket.launchMessage()); // See you!!! undefined

// ¿WHY RETURN UNDEFINED?

// The behavior you're seeing is due to how JavaScript handles console.log functions and return value.

// The launchMessage function does not have an explicit return value, so it returns
// undefined by default. When you call console.log(falcon11Rocket.launchMessage());, launchMessage runs,
// prints the message to the console, and then returns undefined, which is what console.log displays after the message.

// To fix this, you can simply call launchMessage without wrapping it in console.log.

falcon11Rocket.launchMessage(); // Bye
falconHeavyRocket.launchMessage(); // See you!!!

// USING AN ARROW FUNCTION INTO CONSTRUCTOR FUNCTION
const externalArrowFunction = () => "See you Later :3";

function Rocket2(name, ownMessage, ownMessage2) {
  this.name = name;
  this.launchMessage2 = () => ownMessage; // arrow function into function constructor
  this.externalArrowFunction = ownMessage2; // use external arrow function
}

const falconRocket = new Rocket2(
  "Falcon",
  "BYEEEEEEEEE",
  externalArrowFunction
);

console.log(falconRocket.launchMessage2()); // BYEEEEEEEEE
console.log(falconRocket.externalArrowFunction()); // See you Later :3

// USING AN ARROW FUNCTION TO CREATE AN OBJECT
const RocketWithArrowFunction = (name, ownMessage) => ({
  name: name,
  launchMessage: ownMessage,
});

const messageForArrowFunction = () => "Successful launch!!";

const falcon9Rocket = RocketWithArrowFunction(
  "Falcon 9",
  messageForArrowFunction
);

console.log(falcon9Rocket.name); // Falcon 9
console.log(falcon9Rocket.launchMessage()); // Successful launch!!
