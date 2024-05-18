# Arrow function Context

Arrow functions in JavaScript have a special feature regarding context handling (this).
Unlike traditional functions, arrow functions do not have their own "this". Instead, they
inherit "this" from the lexical context in which they were defined. "this" means that
the valueof "this" inside an arrow function is the same as the value of "this" where the
arrow function was created.

Here are some key points about how arrow functions handle context:

1. Without own "this": Arrow functions do not create their own "this". If you try to access "this" inside
   an arrow function, you will get "this" from the external context in which the function was defined.

2. Lexical context inheritance: The value of "this" within an arrow function is the same as "this"
   in the context where the function was defined; "this" is useful to avoid rebinding "this" in
   callback functions, especially in object methods and in promises.

3. Not suitable for object methods: Because arrow functions do not have their own "this", they are not
   suitable for defining methods on objects where "this" is expected to refer to the object.

## LEXICAL BINDING

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

characterDialogues.messageWithArrowFunction2("Be or not to be..."); // María says: Be or not to be...

#### In the messageWithArrowFunction2 function, it inherits from name, is direct. Instead messageWithArrowFunction, it is a key and then the value tha it is the arrow function, there "this" is not defined.
