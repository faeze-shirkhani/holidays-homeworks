/*
17. Write a function to test whether an array of integers of length 2 does not contain 4 or 6.
Example ===>
[3, 2] = true
[6, 1] = false
*/

let numbers = [3, 1, 2];

function testnum(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] === 6 || num[i] === 4) {
      return false;
    }
  }
  return true;
}

console.log(testnum(numbers));
