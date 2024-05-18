// CALL METHOD
const owner = "Elsa";
const address = "1234 avenue";

function dogGreeting(owner, address) {
  console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`);
}

const newHouse = {
  dogName: "Frida",
};

dogGreeting.call(newHouse, owner, address); // Hi, I'm Frida and I live with Elsa on 1234 avenue

// APPLY METHOD
// if we have many parameters wit could use and array
function dogGreeting2(owner, address, comment) {
  console.log(
    `Hi, I'm ${this.dogName} and I live with ${owner} on ${address}. ${comment}`
  );
}
const comment = "I love my life here!!";
const necessaryValues = [owner, address, comment];

dogGreeting2.apply(newHouse, necessaryValues); // Hi, I'm Frida and I live with Elsa on 1234 avenue. I love my life here!!

// the difference between call and apply is the way the parameters are being passed.

// BIND METHOD
// return a function, we use it when we need a function with another execution context
const bindingWithBind = dogGreeting.bind(newHouse, owner, address);
console.log(bindingWithBind); // [Function: bound dogGreeting]
bindingWithBind(); // Hi, I'm Frida and I live with Elsa on 1234 avenue

//Other class from youtube: https://www.youtube.com/watch?v=bS71_W_BDFE
