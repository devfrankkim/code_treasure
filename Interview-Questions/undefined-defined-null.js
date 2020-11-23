// https://levelup.gitconnected.com/difference-between-undefined-and-not-defined-and-null-in-javascript-adfe38b3d2d
/*
JavaScript has two types of values,
null and undefined, 
that represent an empty variable. 
Both are primitive data types  and are falsy values.
*/

// ========= Undefined =========
// Declared but no value in it
// JavaScript engine does it for us at runtime.
// Global variable
var number;
console.log(number); // undefined
var myObj = {} 
console.log(myObj.value); // undefined


// ========= null =========
// We use null when we want to explicitly declare that a variable is empty.
// human put it as no value
// object
let data = null;
console.log(data); // null
console.log(typeof data); // object


// ========= not defined =========
//  is not EVEN declared
console.log(a); // 1 -> hoisting
console.log(b); // ReferenceError -> is not defined
var a = 'var'
let b = 1;

// In JavaScript i.e.
// The variable declarations are processed before code execution takes place in JavaScript.
/*
let and const don't have hoisting 
so it will throw a reference error.
*/