// NULL
const toy = null;
console.log(toy); // null
console.log(typeof toy); // object

// typeof null as object is an error of JS.

// This error has not been corrected and will
// not be corrected since there have been several
// programs made on this language and therefore on this error.

// UNDEFINED
let names;
console.log(names); // undefined

// the value is not assigned to the initialized variable

// NULL and UNDEFINED using is not common when we initialize a variable, the
// most common use is in comparisons. Or when JS return this values.

// SYMBOL
const uniqueId = Symbol("id");
const symbol1 = Symbol(1);
const symbol2 = Symbol(1);
// We use this data type when we assign a unique and immutable value, this is, we don't want to change this value

console.log(symbol1); // Symbol(1)
console.log(symbol2); // Symbol(1)

console.log(symbol1 === symbol2); // false
// Symbol() create an identifier so that's the reason the comparison is false

const ID = Symbol("id");
let user = {};
user[ID] = "1234"; // add a key in the object
console.log(user); // { [Symbol(id)]: '1234' }

// BIGINT
const bigNumber = 1234567892345654334543234565432234565433405690989876n;
console.log(bigNumber); // 1234567892345654334543234565432234565433405690989876n
console.log(typeof bigNumber); // bigint

const particlesNumber = 10n ** 100n;
console.log(particlesNumber); // 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n

// we don't loss precision with the use of bigint
