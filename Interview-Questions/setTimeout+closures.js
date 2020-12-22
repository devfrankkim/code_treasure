// https://www.freecodecamp.org/news/thrown-for-a-loop-understanding-for-loops-and-timeouts-in-javascript-558d8255d8a4/
// Thrown for a loop: understanding for loops and timeouts in JavaScript
/*
The call stack
There’s only one call stack in JavaScript, and this will become important as we continue to build our foundation.

Web APIs
Many web APIs allow us to listen or wait for something to occur. 
When that event occurs, we then run some other code.
*/

console.time('myTimer');
for(var i = 1; i < 6; i++) {
   console.log('Loop Number' + i); // added this
   setTimeout(()=>{
      console.log(i);
   },1000);
}
console.log('The loop is done!');
console.timeEnd('myTimer');

// =========   setTimeout   =========

function x(){

   var closureReference = 1;
   setTimeout(function(){
      console.log(closureReference)
   }, 1000)
   console.log("Hi JavaScript")
}

x()

// JavaScript doesn't wait for anyone.

/*
- this forms a closure 
- this function remembers the reference to the variable "closureReference"
- where this function goes, it takes the reference of "closureReference" together.
- what does the setTimeout do? 
-> it takes the callback function and stores it into some place and put a timer to it.
-> Once the timer expires, it takes the function and puts it again to the call stack and runs it.
-> setTimeout takes the callback function + put a timer + when the timer expires, it calls the function
-> it's waiting for the timer to expire 

function(){
      console.log(i)
   }
*/


function y(){
   for(var i = 1; i <= 5; i++){
      setTimeout(function(){
         console.log(i)
      }, i * 1000)
   }
   console.log("Hi JavaScript")
}

y()

// pointing to the same reference to "i"
// i: 6
/*
setTimeout(function(){
   console.log(i) // 1
}, i * 1000)
}
setTimeout(function(){
   console.log(i) // 2
}, i * 1000)
}
setTimeout(function(){
   console.log(i) // 3
}, i * 1000)
}
setTimeout(function(){
   console.log(i) // 4
}, i * 1000)
}
setTimeout(function(){
   console.log(i) // 5
}, i * 1000)
}
*/
// for(var i = 1; i <= 5; i++) -> i: 6 

console.log(i); // 6 


// ============ solution (1) ============
// "let" has a block scope 
// it means, for each and every loop iteration, everytime loop runs, the variable is new variable
// each time, set time is run, the call back function has a new copy of the variable with it.
// the variable has its own identitiy 



function solution1(){
   for(let i = 1; i <= 5; i++){
      setTimeout(function(){
         console.log(i)
      }, i * 1000)
   }
   console.log("Hi JavaScript")
}

solution1()

// it's referring to different memory location
// because "let" is block scope so it creates a new copy everytime the loop executes

/*
setTimeout(function(){
   console.log(i) // 1
}, i * 1000)
}
setTimeout(function(){
   console.log(i) // 2
}, i * 1000)
}
setTimeout(function(){
   console.log(i) // 3
}, i * 1000)
}
setTimeout(function(){
   console.log(i) // 4
}, i * 1000)
}
setTimeout(function(){
   console.log(i) // 5
}, i * 1000)
}
*/

// ============ solution (2) ============
// AGAIN, only closures will help you.

console.time('myTimer');
function solution2(){
   for(var i = 1; i <= 5; i++){
      function closureFn(number){
         setTimeout(function(){
            console.log(number)
         }, number * 1000)
      }
      closureFn(i)
   }
   console.log("Hi JavaScript")
}

solution2()
console.timeEnd('myTimer');


/*
1. Use let instead of var
2. use iife
3. Bind the callback function with the value of i
4. move i to outer function with let
*/