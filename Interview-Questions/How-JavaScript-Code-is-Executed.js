// Everything in JavaScript happens inside an Execution Context

// Single threaded: JS can only execute one command at a time 
// Synchronous: In a specific order

// What happens when you run a JavaScript program?
// Execution Context gets created
var n = 2;
function square (num){
    var answer = num * num;
    return answer;
}

var square2 = square(n);
var square4 = square(4);

// 1) Global Execution Context(big box) gets created (memory component, code component)

// ======= A Memory Creation =======

// 2) JavaScript will allocate the memory to all the variables and the functions
// it allocates memory to n
// Inside MEMORY (variables & functions)
// n: undefined  / square: {...} / square2: undefined  / square4: undefined

// ======= B Code Execution =======
// Run code line by line

// var n = 2;
// it replaces the memory "n" undefined with 2
// memory: n = 2; 
// *** reinvoke the function ***

// function invocation
// Whenever you see a function name with (), <- executing the function
// funcitons are the heart of JavaScript

// Whenever a new function is invoked, all new execution get created like a mini program
// The small execution has two components again!!! (memory component - code component)

// (num) {var answer = num* num return answer};
// phase 1 
// Local Memory: num: undefined / answer: undefined 
// parameters, other variables ex) num, answer'

// phase 2 
// Code Execution (execute line by line)
// square(n); 
// Local Memory: num: 2
// Code Execution: num * num 
// Local Memory: answer: num * num (4)

// the return keyword tells the function, 
// you are done with your work. Return the whole control back to the Execution Context where the function was invoked

// The Local Memory will go back to the Execution Memory
// square2: 4

// After all, the whole global context gets deleted after finishing working


/*
    Summary:

    Phase 1 
    1) When a javascript program runs, Global Execution Context gets created
    Inside the Global Execution Context
    2) It creates two components (Memory Creation, Code Execution)
    3) Memory: variables + functions
    4) All the variables are allocated with "undefined" and it stores the whole function

    Phase 2
    5) JavaScript gets run line by line (Code Execution)
    6) It sees the value and it replaces the memory variable with new value 
    ex) var number = 2; 
    Inside Global Context Memory
    number: undefined;

    After Execution,
    number: 2

    7) when invoking the function, 
    8) Another Execution Context gets created with 2 components(Local Memory, Code execution)

    ex) 
    function square(num){ 
        var answer = num * num;
        return answer; 
    }
    var square2 = square(n)

    9) 
    square2: undefined / local memory, num: undefined / answer: undefined
    n: 2 -> answer: num * num -> store the value into local memory: answer: 4  -> Glboal Context, square2: 4 

*/


/*
    JavaScript does this crazy work beautifully with call stack
    What is Call Stack? 
    - At the bottom of the stack: Global Execution Context
    - and other executions work will be stacking 
    - when the executions are done working, it goes back to Global Execution Context   

   ***** Call stack is for only managing this execution context. *****
   ***** Call Stack gets empty after finishing executing everything. *****
   ***** Call Stack maintains the order of execution of execution contexts *****
*/





