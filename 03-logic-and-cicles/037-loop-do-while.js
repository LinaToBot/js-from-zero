/*
LOOP: DO WHILE

do {
    code to run
} while(condition)

*/

let counter = 0;
do {
  console.log(counter);
  counter++; // avoid infinity loop
} while (counter < 10);

// if we need to run the code first before the "do ... while" condition, it is the best option.
