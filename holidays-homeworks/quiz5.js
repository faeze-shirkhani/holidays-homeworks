/* 
5. Define a function that takes an array of numbers as its parameter. The function returns an array that contains array's length, the smallest element, the largest element, and the average of all elements.
*/

let numbers = [2, 2, 3, 3, 5];

function findAnswers(arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  const average = sum / arr.length
  return [arr.length,max,min,average];
}

console.log(findAnswers(numbers));

// function findAnswers(arr) {
//   let finalArr = [];
//   const average = arr.reduce((sum, curr) => sum + curr, 0) / arr.length;
//   let max = arr[0];
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//     if (arr[i] < min) {
//       fmin = arr[i];
//     }
//   }
//   finalArr.push(arr.length, max, min, average);
//   return finalArr;
// }

// console.log(findAnswers(numbers));
