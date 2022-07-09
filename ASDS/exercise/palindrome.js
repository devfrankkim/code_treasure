// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// match front-back
// %2 index - odd # is ok

let str = "abba";

// ======= for of =======
function palindrome(str) {
  return str.split("").every((char, i) => char === str[str.length - i - 1]);
}

// ======= for of =======
// function palindrome1(str) {
//   let newStr = "";
//   for (let x of str) {
//     newStr = x + newStr;
//   }

//   return str === newStr;
// }

// split + reverse + join
// function palindrome1(str) {
//   let reversed = str.split("").reverse().join("");

//   return str === reversed;
// }

// ======= every =======

function palindrome2(str) {
  let reversed = str.split("").reverse().join("");

  return str === reversed;
}

if (typeof palindrome === "function") {
  palindrome(str);
}

module.exports = palindrome;
