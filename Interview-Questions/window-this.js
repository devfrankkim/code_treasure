// JavaScript creates window automatically.
// functions and variable are created by JavaScript engine.
// You can access all these variables and functions anywhere in your JS program.

// JavaScript engine also creates a this keyword
// at the global level, this points to the window object

// so what is "window"?
// A global object which is created along with the global execution context
// when a javascript program runs, A global object and global execution context get created
// and along with the execution context, 'this' variable is created.

// javascript is not just run on browsers. It runs a lot of places.
// whever javascript is run, there MUST be a JavaScript engine there. ex) v8(chrome)
// JavaScript engine has a responsibility to create a global object
// =========== In JavaScript, there's always a global object defined ===========
// for browsers -> window
// for Node JS -> global
// =========== even if our file is empty, JavaScript engine will create this global object ===========

// At this global level in the global execution context, "this === window"
// Even for the functional execution context, 'this' is created.

// =========== Global Space ===========
// Global Space -> any variables and functions that are not inside of any functions

var globalVariable = 'global space'

function globalFunction(){
    var notGlobal = 'Not in global space';
}
// "the global space stuff" will be attached to "global object(this-window)"


// How do we access this? 
// if we don't put 'window', it automatically assusmes that you are refering to the global space
console.log(window.globalVariable); // 'global space'
console.log(globalVariable); // 'global space'
console.log(x); // "x is not defined" because if you don't put anything in front of x, it assumes it's from Global Space itself inside the Global Object (window)

// "this" points to "window object" in global space.
// They are all referring to the same place in the memory space.
console.log(this.globalVariable); // 'global space'


// ===================== What is the shortest program in JavaScript =======================
// No Code is the shortest program in JavaScript