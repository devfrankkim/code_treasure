// let & const declarations are Hoisted
// it just is Hoisted very differently than "var"
// it's temporal dead zone for the time being

console.log(b); // undefined
console.log(a); // Reference Error
let a  = 10;
var b = 100; 

console.log(window.a); // undefined
console.log(window.b); // 100;


// so how do we know which variables are Hoisted or Not
// Check if the variable was allocated in the memory or not
// "let a" is also allocated in the memory even before the code gets executed
// "var b" is attached to the global object

// let & const are allocated in the memory  ->  Hoisting (yes)
// These are stored in the separate memory space than "Global"
// These are not stored in the Global Object now.
// You cannot access "this different memory" space with let & const before you put some values in them.


// temporal dead zone is the time since when let is hoisted until it initialize the value.
// the time between them is called temporal dead zone

console.log(temporalDeadZone);
// temporalDeadZone : undefined in the memory (Hoisting)  +  Has NOT initialized yet (initialize values)

let temporalDeadZone = 100;

// Whenever you try to access variables inside temporal dead zone -> It gives you the Reference Error with initialization

// =========== let VS const ===========
let syntaxError = "syntaxError"; // Syntax Error 
let syntaxError = "syntaxError"; // Syntax Error 


let changable;
changable = 10;
console.log(changable);  // 10;

const NOPE;
NOPE = 'NOPE'; // Syntax Error: Missing initializer in const declaration
  
const constantVariable = 'CANNOT CHANGE'
constantVariable = 'REALLY CANNOT' // Uncaught TypeError: Assignment to constant variable.


// =========== (CONST) SyntaxError VS TypeError vs ReferenceError ===========

// TypeError: When trying to assign other values to "const" -> Type const(constant) 
const EXAMPLE = 'EXAMPLE'
EXAMPLE = 'CHANGE' // TypeError (constant type)

// SyntaxError: Missing initializer in const declaration. Missing Syntax 
const missingSyntax; // SyntaxError (missing initialize)

const duplicate = 'duplicate' // SyntaxError: 'duplicate' has already been declared
const duplicate = 'duplicate' // SyntaxError: 'duplicate' has already been declared

// ReferenceError: when JavaScript Engine tries to find out specific variables inside the memory space AND you CANNOT access it
console.log(noReferenceInTheMemory); // noReferenceInTheMemory is not defined -> It's in the "TEMPORAL DEAD ZONE"

console.log(temporalDead); 
let temporalDead = 'temporalDead'

// Best way to avoid TEMPORAL DEAD ZONE: Put all the initialization to the top




























