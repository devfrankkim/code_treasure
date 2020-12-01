/**
 * Write a function to determine if one String is
 * a case-insensitive anagram of another String
 * ex)
 * abcd - bacd -> true (same length && same letters)
 * abdd - bacf -> false 
 * abcd - ddbbccaa -> false (different length)
 */

let mySolution = function (str1, str2) {
    if(str1.split('').map((value) => value.toLowerCase()).sort().join('') === str2.split('').map((value) => value.toLowerCase()).sort().join('')){
        console.log(true);
    } else {
        console.log(false);
    }
};

console.log(mySolution("hello", "jello")); // false
console.log(mySolution("hello", "OLLEH")); // true
console.log(mySolution("hello", "OlLeH")); // true
