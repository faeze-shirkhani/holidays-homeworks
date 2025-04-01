/*
11. Write a function to find the number of even digits in a given integer.
Example ===> 450 = 2
Example ===> 125 = 1
*/

let number = 125235235;

function evenNumbers(num) {
  let array = num.toString().split("");
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(evenNumbers(number));
