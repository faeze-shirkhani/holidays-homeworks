/*
9. Write a function to test whether a given integer is greater than 20 and return the given number, otherwise return 20.
Example ===>
123 = 123
10 = 20
*/

let number = 132;

function integer(num) {
  if (num > 20) {
    return num;
  } else {
    return 20;
  }
}

console.log(integer(number));