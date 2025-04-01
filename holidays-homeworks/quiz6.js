/*
6. Write a function to compute the sum of all the digits that occur in a given string.
Example ===> abcd21hd8kl7 
2 + 1 + 8 + 7 = 18
*/
let user ="abcd21hd8kl7";

function extractNumbers(str) {
  let result = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      result += Number(str[i]);
    }
  }
  return result;
}

console.log(extractNumbers(user));
