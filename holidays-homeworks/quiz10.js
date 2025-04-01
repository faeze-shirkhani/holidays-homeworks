/*
10. Write a function to remove all characters from a given string that appear more than once.
Example ===> "abcdabc" = d
*/

let string = "abcdabc";

function findStr(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      result += str[i];
    }
  }
  return result;
}

console.log(findStr("abcdabc"));
