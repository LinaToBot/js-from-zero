// TRADITIONAL FUNCTION
function dinner(protein, vegetables) {
  return `${protein} ${vegetables}`;
}

dinner(`🥩`, `🥦`);

// ARROW FUNCTION --> void "this" and be shorter
const dinner2 = (protein, vegetables) => {
  return `${protein} ${vegetables}`;
};

dinner2(`🥩`, `🥦`);

const greeting = function (name) {
  return `Hi, ${name}`;
};

// Arrow function - explicit return
const greetingExplicit = (name) => {
  return `Hi, ${name}`;
};

// Arrow function - implicit return
const greetingImplicit = (name) => `Hi, ${name}`; // we could remove the parenthesis because the parameter is only one
const greetingImplicitWithTwoParameters = (name, lastName) =>
  `Hi, ${name} ${lastName}`;

// LEXICAL BINDING
const characterDialogues = {
  name: "María",
  messageWithTraditionalFunction: function (message) {
    console.log(`${this.name} says: ${message}`);
  },
  messageWithArrowFunction: (message) => {
    console.log(`${this.name} says: ${message}`);
  },
  messageWithArrowFunction2(message) {
    console.log(`${this.name} says: ${message}`);
  },
};

characterDialogues.messageWithTraditionalFunction("Here I'm..."); // María says: Here I'm...

characterDialogues.messageWithArrowFunction("Be or not to be..."); // undefined says: Be or not to be...
// In this case, messageWithArrowFunction does not work as expected because
// the arrow function inherits "this" from the context in which the characterDialogues
// object was created, which is probably the global context (window in browsers),
// where this.name is undefined.

characterDialogues.messageWithArrowFunction2("Be or not to be..."); // María says: Be or not to be...

console.log(characterDialogues);
// {
//     name: 'María',
//     messageWithTraditionalFunction: [Function: messageWithTraditionalFunction],
//     messageWithArrowFunction: [Function: messageWithArrowFunction],
//     messageWithArrowFunction2: [Function: messageWithArrowFunction2]
//   }

// SOLUTIONS FOR CONTEXT MANAGEMENT

// 1. Use traditional functions

// 2. Capture context with a variable
const characterDialogues2 = {
  name: "María",
  messageWithTraditionalFunction: function (message) {
    console.log(`${this.name} says: ${message}`);
  },
  messageWithArrowFunction: function (message) {
    const self = this; // context
    const arrowFunction = (message) => {
      console.log(`${self.name} says: ${message}`);
    };
    arrowFunction(message);
  },
};

characterDialogues2.messageWithTraditionalFunction("Here I'm..."); // María says: Here I'm...
characterDialogues2.messageWithArrowFunction("Be or not to be..."); // María says: Be or not to be...
