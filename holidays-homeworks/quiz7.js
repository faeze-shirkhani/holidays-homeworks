/*
7. Write a function to find the number of common elements of both arrays.
Example ===> [1, 2, 3, 4], [1, 2, 3, 5] = 3
*/

let array1 = [1, 2, 3, 4];
let array2 = [1, 2, 3, 5];

function commonNumber(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if(array2.includes(arr[i])){
        count ++
    }
  }
  return count
}

console.log(commonNumber(array1));