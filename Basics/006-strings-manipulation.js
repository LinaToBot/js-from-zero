// type of strings:
// a. strings
// b. objects

// PRIMITIVE STRINGS
const sentence1 = "I´m a primitive string";
console.log(typeof sentence1); // string

const sentence2 = String("I am a primitive string too ");
console.log(typeof sentence2); // string

// they are immutable strings, because if we assign another string in the memory we generate another variable
// STEP BY VALUE

// OBJECT STRING
const objectString = new String("I´m object string");
console.log(typeof objectString); // object

// ACCESS CHARACTERS

const greeting = "Hello. How are you?";

// the strings have index

console.log(greeting[2]); // l
console.log(greeting.charAt(2)); // l
console.log(greeting.indexOf("o")); // 4
console.log(greeting.indexOf("How")); // 7, the space count.
console.log(greeting.indexOf("how")); // -1, because that word doesn't exist in that string.
console.log(greeting.lastIndexOf("o")); // 17
console.log(greeting.slice(4, 6)); // o.  The first parameter is the initial index and the second parameter is the number of the index position we want to know plus one.
console.log(greeting.length); // 19
console.log(greeting.toLocaleLowerCase()); // hello. how are you?
console.log(greeting.toLocaleUpperCase()); // HELLO. HOW ARE YOU?

const dividedGreeting = greeting.split(" ");
console.log(dividedGreeting); // [ 'Hello.', 'How', 'are', 'you?' ]
console.log(dividedGreeting[1]); // How

const greetingWithSpaces = " Hello world ";
const greetingWithoutSpaces = greetingWithSpaces.trim();
console.log(greetingWithoutSpaces); // "Hello world"

const originalMessage = "Paulina and me";
console.log(originalMessage); // Paulina and me
const replaceWordInOriginalMessage = originalMessage.replace("me", "Mauricio"); // Paulina and Mauricio
console.log(replaceWordInOriginalMessage);
