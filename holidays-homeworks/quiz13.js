/*
13. Write a function to check whether a given number is in a given range.
Example ===> 
(1,2,4) => 2 is between 1 and 4 ===> return ==> true
(1,2,-3) = 2 is not between 1 and -3 ===> return ==> false
*/

let numbers = [1, 4, 5, 6, 7];

function checkNUm(num) {
  let first = num[0];
  let end = num[num.length - 1];
  for (let i = 1; i < num.length - 1; i++) {
    if (num[i] <= first || num[i] >= end) {
      return false;
    }
  }
  return true;
}

console.log(checkNUm(numbers));
