// IMPLICIT BINDING
const house = {
  dogName: "Pumba",
  dogGreeting: function () {
    console.log(`Hi, I'm ${this.dogName}`);
  },
};

house.dogGreeting(); // Hi, I'm Pumba

// Without context
function dogGreeting() {
  console.log(`Hi, I'm ${this.dogName}`);
}

const house2 = {
  dogName: "Tronchita",
  dogAge: 3,
};

// house2.dogGreeting(); // error: TypeError: house2.dogGreeting is not a fu(nction
// this error happens because object house2 don't have that function dogGreeting().
// and dogGreeting() has this, but not a context.

// EXPLICIT BINDING
function dogGreeting2() {
  console.log(`Hi, I'm ${this.dogName}`);
}

const newHouse = {
  dogName: "Poncha",
};

dogGreeting2.call(newHouse); // Hi, I'm Poncha

function newDogGreeting(owner, address) {
  console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`);
}

const owner = "Txai";
const address = "street 20";

newDogGreeting.call(newHouse, owner, address); // Hi, I'm Poncha and I live with Txai on street 20
//                        ^        ^       ^
//                        |        |       |
//                     context parameter parameter
