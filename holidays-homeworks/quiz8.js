/*
8. Write a function to check whether all the digits in a given number are the same or not.
Example ===>
12346 = false
1111 = true
*/

const number = 11114;

function sameNumbers(num) {
  let array = num.toString().split("");
  let checkNum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (checkNum !== array[i]) {
      return false;
    }
  }
  return true
}

console.log(sameNumbers(number));
