// type of data complex - step by reference

let fruits = {
  orange: "🍊",
};

let vegetables = fruits;

vegetables.orange = "🥦";

console.log(fruits); // { orange: '🥦' }

// because fruits and vegetables have the same place in memory

let clothes = {
  blouse: "👚",
};

clothes.pants = "👖";

console.log(clothes); // { blouse: '👚', pants: '👖' }

// the resukt { blouse: '👚', pants: '👖' } it is another direction
// clothes = {blouse: "👚",} has this memory direction #001
// and the new one clothes =  { blouse: '👚', pants: '👖' } has this direction #002

// variable: clothes    values: <#0001>     memory direction: #001      object:  { blouse: '👚' }
// variable: clothes    values: <#0002>     memory direction: #002      object:  { blouse: '👚', pants: '👖' }

// we don´t have access to the older clothes, because the garbage collector delete the firs reference in memory (#001) because we don´t use it any more.
// so in memory we have:
// variable: clothes    values: <#0002>     memory direction: #002      object:  { blouse: '👚', pants: '👖' }
