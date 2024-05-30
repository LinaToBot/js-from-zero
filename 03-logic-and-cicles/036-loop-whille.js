/*
LOOP: WHILE

while(condition){
    code to run
}

You should be careful with the "while" as it can generate an infinite loop.
*/

let counter = 0;

while (counter < 10) {
  console.log(counter);
  counter++; // if we forget this (counter++) then "while" will generate an infinite loop
}

/* 
output:

0
1
2
3
4
5
6
7
8
9
*/
