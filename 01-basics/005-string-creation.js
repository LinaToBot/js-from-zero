// STRING CREATION
const firstOption = "Simple quotation marks"; // with this  ' '
const secondOption = "Simple quotation marks";
const thirdOption = `Simple quotation marks`;

// 1. Concatenation: option + (with this ' ')
const address = "Street 234";
const city = "CDMX";
const fullAddress = "My full address is " + address + city;
console.log(fullAddress); // My full address is Street 234CDMX

const fullAddressWithSpace = "My full address is " + address + " " + city;
console.log(fullAddressWithSpace); // My full address is Street 234 CDMX

// 2. Concatenation: Template literals
const myName = "Paulina"; // with this  ' '
const country = "Mexico"; // with this  ' '
const introduceOneself = `Hi, I´m ${myName} from ${country}`;
console.log(introduceOneself); // Hi, I´m Paulina from Mexico

// 3. Concatenation: join()
const firstPart = "I love";
const secondPart = "the people from";
const thirdPart = "🇲🇽";
const thinking = [firstPart, secondPart, thirdPart];
console.log(thinking.join(" 🌮 ")); // I love 🌮 the people from 🌮 🇲🇽

// 4. Concatenation: concat()

const hobbie1 = "reading";
const hobbie2 = "walking";
const hobbie3 = "dancing";
const myHobbies = "My hobbies are: ".concat(
  hobbie1,
  ", ",
  hobbie2,
  " and ",
  hobbie3,
  "."
);
console.log(myHobbies); // My hobbies are: reading, walking and dancing.

// ESCAPE CHARACTERS

// const whatDoIDo = 'I'm a developer '
// the previous line show you a error because we need close the  quotation marks

// 1. Alternative escape
const alternativeEscape = "I'm a developer";

// 2. Backslash
const backslashEscape = "I'm a developer"; // with with this  ' ' insted of "" and a blackslash (\) before ('m)

// 3. Templete Literals
const templateLiteralsEscape = `I'm a developer`;

// LONG STRINGS CREATION
/*
This is just a example
of how long string 
can be writing 
*/

const paragraph =
  "This is just a example\n" + "of how long string\n" + "can be writing.";

console.log(paragraph);
// This is just a example
// of how long string
// can be writing

const paragraph2 =
  "This is just the second example\n\
of how long string\n\
can be writing.";
console.log(paragraph2);
// This is just the second example
// of how long string
// can be writing

const paragraph3 = `This is just the third example
of how long string
can be writing.`;
console.log(paragraph3);
// This is just the third example
// of how long string
// can be writing.

// When we use "", '' or `` in the variables they named as STRING LITERALS
// and when we obtain the string in the return that string or strings are called STRING VALUES
