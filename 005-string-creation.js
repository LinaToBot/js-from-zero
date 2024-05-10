// String creation
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
