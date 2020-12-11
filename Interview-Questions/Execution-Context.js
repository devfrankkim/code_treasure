// https://www.javascripttutorial.net/javascript-execution-context/
// Execution Context

// Single threaded: JS can only execute one command at a time 
// Synchronous: In a specific order

// Remember: the JavaScript engine creates the global execution context before it starts to execute any code.
//
let x = 10;

function timesTen(a){
    return a * 10;
}

let y = timesTen(x);

console.log(y); // 100

// The creation phase


// Create a global object i.e., window in the web browser or global in Node.js.
// Create a this object binding which points to the global object above.
// Setup a memory heap for storing variables and function references.
// Store the function declarations in the memory heap and variables within the global execution context with the initial values as undefined.

// For every function call, the JavaScript engine creates a new Function Execution Context.
/*
 The Function Execution Context is similar to the Global Execution Context, 
 but instead of creating the global object, 
 it creates the arguments object 
 that contains a reference to all the parameters passed into the function:


 To keep track of all the execution contexts 
 including the Global Execution Context and Function Execution Contexts, 
 the JavaScript engine uses a data structure named call stack 
 
 https://www.javascripttutorial.net/javascript-call-stack/


*/