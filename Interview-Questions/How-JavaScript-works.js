// JavaScript is a synchronous single-threaded language

// Everything in JavaScript happens inside an Execution Context
// you can assume this execution context to be a big box or a container in which whole JavaScript code is executed

// Execution Context has two components (1) Memory Component (2) Code Component

// (1) Memory Component : This is where varialbes and functions are stored as a key value pairs
// ex) key: value, a: 10, fn: {...}
// Heavy word: Variable Environment


// Code Component: This is where the whole javascript code is executed
// This is the place where the code is executed one line at a time.
// Heavy word: thread of execution 
// - A thread in which the whole code is executed one line at a time.

// so JavaScript can only understand(execute) one command at a time and in a specific order


/*
JavaScript is Synchronous
Spoiler: at its base, 
JavaScript is a synchronous, 
blocking, 
single-threaded language. 
That just means that only one operation can be in progress at a time.
*/
// AJAX
// asynchronous?
// https://medium.com/better-programming/is-javascript-synchronous-or-asynchronous-what-the-hell-is-a-promise-7aa9dd8f3bfb