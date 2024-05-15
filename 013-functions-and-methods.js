// CAPACITIES THAT FUNCTIONS HAVE just like other objects.
// functions are still objects regardless of their typeof

// 1. Pass functions as arguments into another functions --> CALLBACK
function a() {} // declaration of a function --> function name () {}
function b(a) {}

// 2.  Return functions
function c() {
  function d() {}
  return d;
}

// 3. assign function to variables --> function expresion
// the name of the function is assign by the variables
const e = function () {};

// 4. function can have properties and methods.
function p() {}
const obj = {};

p.call(obj); // call is a method that assign a context execution to function p

// 5. Nested functions

function f() {
  function g() {
    function h() {
      // from h a can access to f properties
    }
    h(); // we can call the function into the other if we need
  }
  g();
}
f();

// 6. Functions into objects

const rocket = {
  name: "Falcon 11",
  launchMessage: function launchMessage() {
    console.log("🔥"); // thi is that we call method : function launchMessage() {console.log("🔥"); }
  },
};

rocket.launchMessage();
