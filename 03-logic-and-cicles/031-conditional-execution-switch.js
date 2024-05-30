// CONDITIONAL EXECUTION: SWITCH

// SWITCH's syntax:

// switch (expression) {
//   case value1:
//     // code to execute
//     break;
//   case value2:
//     // code to execute
//     break;
//   case value3:
//     // code to execute
//     break;
//   case value4:
//     // code to execute
//     break;
//   case value5:
//     // code to execute
//     break;
//   case value6:
//     // code to execute
//     break;
//   case value7:
//     // code to execute
//     break;
//   default:
//   // code to execute
// }

// we could use it with "n" cases

let fruitsSelected = "grapes";

switch (
  fruitsSelected // ===
) {
  case "orange":
    console.log("Oranges cost: $10.00");
    break;
  case "apples":
    console.log("Apples cost: $9.00");
    break;
  case "grapes":
    console.log("Grapes cost: $20.00");
    break;
  default:
    console.log("We don't have that fruit");
}
