// 1. User basic information
const name = "Paulina";
const age = 19;
const height = 1.64;
const measure = "cm";
let hometown;

// 2. personal interest
const userInterests = {
  hobbies: ["weightlifting", "reading", "listen to music"],
  favoriteBookTitle: "Salem's lot",
  gymDays: 4,
};
const favoriteFood = ["ramen", "menudo", "tacos"];

// 3. Hometown information
const isInMexicoCity = true;

hometown = {
  country: "Mexico",
  state: "Mexico City",
};

// 4. Generating a personal presentation

let personalPresentation = `Hi, I'm ${name}, my age is ${age}.

I'm from ${hometown.country}, actually I was born in ${hometown.state}`;

if (isInMexicoCity) {
  personalPresentation += " and I'm living here.";
}

// Print the personal presentation just to check
console.log(personalPresentation);

personalPresentation += `I love practice ${
  userInterests.hobbies[0]
}, in fact my principal hobbies are: ${userInterests.hobbies.join(", ")}. 

My weightlifting training consists of going to the gym ${
  userInterests.gymDays
} days a week.

Something else about me it's that my height is ${height} ${measure}, can you already imagine me?

Finally, my favorite book is ${
  userInterests.favoriteBookTitle
}, and my favorite dishes are: ${favoriteFood.join(", ")}
`;

// 5. Print the personal presentation
console.log(personalPresentation);
