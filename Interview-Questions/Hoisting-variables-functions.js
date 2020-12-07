// (1) EVEN before code starts executing, 
// Memory is allocated to vatiables and functions

// (2) When a function gets invoked, a brand new Execution Context gets created.
// And the brand new execution context gets pushed to the CALL STACK on the top of Global Execution Context

// (3) Call Stack gets empty after all the work.

// (4) Everything works inside the browser itself

// Tips
// 1. Variable declarations are scanned and are made undefined
// 2. Function declarations are scanned and are made available
// 3. arrow function behaves like another variable in memory creaton phase.

getName();
console.log(x); // undefined
console.log(getName); // getName f 

var x = 7;

function getName(){
    console.log('JavaScript');
}

// Not defined vs undefined
// if not in the memory -> Not defined

// arrow function behaves just like another variable in the memory
// arrowFn is allocated to undefined first
console.log(arrowFn);
var arrowFn = () => {
    console.log('arrow function behaves like another variable as well');
}

var expressionFn = function () {
    console.log('expression behaves like another variable as well');
}