/*

1.Write a function that returns the number of vowels in a string.
vowels => a e i o u
Example ===> "Hello" = 2
*/

// function vowelSound(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       arr[i] === "a" ||
//       arr[i] === "e" ||
//       arr[i] === "i" ||
//       arr[i] === "o" ||
//       arr[i] === "u"
//     ) {
//       result.push(arr[i]);
//     }
//   }
//   return result.length;
// }

// console.log(vowelSound("Hello"));

function vowels(str) {
  let vowelSound = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowelSound.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(vowels("hello"));
