{
    // Component Statement
    // Why do we use this?
    // block is used to combine multiple javaScript statement into one group
    // we group multiple statements together in a block 
    // so that we can use it where javaScript expects one statement
    // wrapping up our multiple statements
    var a = 10;
    console.log(a);
}

if(true); // syntax error
if(true) true; // one statement
if(true){
    // multiple statements
    var a = 10;
    console.log(a);
}


// These group of multiple statements can be used in a place where javascript expects ONE single statement
//ex) if(true) true;

// we need to have a block which combines multiple statement
// that's the same reason we combine a lot of statements inside "block" and use it for loops, while loops


// ========= so what is block scope then? =========

// block scope means what all variables and functions we can access inside this block.
// how does it work behind the scenes?
// Let's see what happens in case of hoisting 

// b & c are inside the block scopes and hoisted
// let and const are blocked scoped that means they are stored in a separate memory space for block
// Once javaScript is finished executing the block. let & const are no longer accessible
// You cannot access these let & const outside the block
// this is why let & const are in block scope

// how about "a"? -> you can access outside because it is global scope (window.a)

var a = 0;
{
    var a = 10;
    let b = 20;
    const c = 30;
}

// "a" is pointing to the same memory space 
console.log(a); // 10;

let blockScope = 0; // Pointing to the Script memory
{
    let blockScope = 100; // Pointing to the block memory
    console.log(blockScope); // 100
}
console.log(blockScope); // 0 

// shadowing is not only a concept of block. It also behaves in the functions

const c = 100;
function x(){
    const c = 0;
    console.log(c); // 0
}
console.log(c); // 100

var possibleShadow = 10; // Pointing to global memory
{
    let possibleShadow = 0; // pointing to block memory
}

// ==== syntaxError ====
let illegalShadow = 10; // syntaxError
{
    var illegalShadow = 0;
}

// ==== let shadow ====
let fineShadow = 10; // syntaxError
{
    let fineShadow = 0;
}

// if shadowing, it should not cross the boundary of its scope
// let cannot be redeclared
// var is a function scope
// var should be inside his boundary which is function scope


let thisWorks = 20;
function yes(){
    var thisWorks = 0;
}

// lexical means one inside another
// each and every block has its own lexical scope


/*
Lexical Scoping defines how variable names are resolved in nested functions: 
inner functions contain the scope of parent functions even if the parent function has returned.

The last part: "even if the parent function has returned" is called Closure


lexical scoping where
"functions are executed using the scope chain that was in effect when they were defined"
*/

//Before Arrow Functions (no lexical scope by default):

const programming = {
    language: "JavaScript",
    getLanguage: function() {
      return this.language;
    }
  }
  
  const globalScope = programming.getLanguage;
  console.log(globalScope()); // Output: undefined
  
  const localScope = programming.getLanguage.bind(programming);
  console.log(localScope()); // Output: "JavaScript"

  // With arrow functions (lexical scope by default):
  
  const programming = {
    language: "JavaScript",
    getLanguage: function() {
      return this.language;
    }
  }
  
  const arrowFunction = () => {
      console.log(programming.getLanguage());
  }
  