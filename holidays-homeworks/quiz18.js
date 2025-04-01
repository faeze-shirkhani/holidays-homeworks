/*
18. Write a function to check whether the first and last elements in an array of integers are the same..
Example ===>
[50, 20, 130, 50] = true
[50, 20, 130, 52] = false
*/

let numbers = [527, 20, 130, 52];

function checkNUm(num) {
  let first = num[0];
  let last = num[num.length - 1];
  if (first === last) {
    return true;
  }else {
    return false
  }
}
console.log(checkNUm(numbers));
