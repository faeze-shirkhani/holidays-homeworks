/*
2. Write a function that converts a 2D array into a 1D array.
Example ===> [[1, 2, 3], [4, 5, 6], [7, 8, 9]] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/
// with .map()

let number = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const newArr = number.map(function (num) {
  return num.map(function (result) {
    return result;
  });
});

let arrNumber = [].concat.apply([],newArr);
console.log(arrNumber);
