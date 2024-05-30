let message;
const age = 17;
if (age >= 18) {
  message = "You are of legal age, you can pass";
} else {
  message = "You aren't of legal age, you can not pass";
}

console.log(message);

// if it's that easy then we use the ternary operator:
// condition ? true : false

const otherAge = 27;

const messageWithTernary =
  otherAge >= 18
    ? "You are of legal age, you can pass"
    : "You aren't of legal age, you can not pass";

console.log(messageWithTernary);
