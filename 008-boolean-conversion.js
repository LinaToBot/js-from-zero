const isActive = true;
const hasPermission = false;

// IMPLICIT CONVERSION
// js behind converts it to a boolean value
const implicitCoversion = 5 > 3;
console.log(implicitCoversion); // true

// to show if that variable has a value or not
const name = "Platzi";
console.log(!!name); // true

// EXPLICIT CONVERSION
const value = 0;
const explicitBoolean = Boolean(value);
console.log(explicitBoolean); // false

const otherValue = 23;
const explicitBoolean2 = Boolean(otherValue);
console.log(explicitBoolean2); // true
