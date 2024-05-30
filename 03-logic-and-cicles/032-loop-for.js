/* 
LOOP: FOR

For's syntax:

for (variable i; condition; increment) {
    code to execute
}

We use the variable in the condition, the condition must come from an external variable, then 
the increment changes the variable to run the code in a loop.

The loop brakes when the condition is not true.

The name of variable "i" can change, you can use others names, but by convention the "i" is used.

*/

let list = ["eat", "sleep", "code", "repeat"];

for (let listElement = 0; listElement < list.length; listElement++) {
  console.log(list[listElement]);
}

// eat
// sleep
// code
// repeat
