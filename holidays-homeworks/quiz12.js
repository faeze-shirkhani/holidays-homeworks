/*
12. Write a function to get the largest even number from an array of integers.
Example ===> [20, 40, 200, 301] = 200
*/

let numbers = [12, 16, 33, 44, 78];

function largestNUm(arr) {
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    }
  }
  let largestEven = even[0];
  for (let j = 0; j < even.length; j++) {
    if (even[j] > largestEven) {
      largestEven = even[j];
    }
  }
  return largestEven;
}

console.log(largestNUm(numbers));
