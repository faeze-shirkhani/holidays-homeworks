/*
14. Write a function that takes a sentence as a parameter and returns the longest word of the sentence.
Example ===> "kaftar kakol be sar hay hay, in khabar az man bebar vay vay, bego be yaram nakon azaraaaam" = azaraaaam
*/

let sentence = "kaftar kakol be sar hay hay, in khabar az man bebar vay vay, bego be yaram nakon azaraaaam";

function longestWord(str) {
  let array = str.split(" ");
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > max.length) {
      max = array[i];
    }
  }
  return max;
}

console.log(longestWord(sentence));
