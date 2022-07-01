// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

let str = "  abcd";
// function reverse(str) {
//     return str.split("").reduce((prev, curr) => curr + prev, "");
// }

function reverse(str) {
  let arr = [];
  for (let x of str) {
    debugger;
    arr.unshift(x);
  }

  let answer = "";
  arr.forEach((v) => (answer += v));

  return answer;
}

// function reverse(str) {
//     let arr = [];
//     for (let x of str) {
//       arr.unshift(x);
//     }

//    return arr.join('')
//   }

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// function reverse(str) {
//   let reversed = "";

//   for (let x of str) {
//     reversed = x + reversed; // string + string
//   }

//   return reversed;
// }
reverse(str);

module.exports = reverse;
