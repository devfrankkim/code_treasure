## What is a Callback function in JavaScript? Why do we use it?

- functions are first cizen
- pass functions into other functions like values
- The function which you pass into another function is known as `Call back function`
  
  ```js
  // the first parameter for setTimeout is a callback function after certain amount of time.
  // after second parameter
  // giving the callback to setTimeout and it executes sometime later 
  setTimeout(function(){
    console.log('this is from call back')
  }, 3000)


  // it is up to x() when it wants to call y function 
  // y is called back sometime later in your code

    function x(y){
      console.log('x');
      y();
    }

    x(function y(){          
        console.log('y');
    })
    // you call this function, 


    // if you call a function, and if you pass a function inside another function 
    // "y" function is call back function
    // === passing a function inside another function ===

  ```
## JavaScript is a sychronous and single-threaded language

- It can do only one thing at a time in a specific order
- Because of `Call Backs`, we can do asychronous things inside JavaScript


## Blocking the main thread

## Deep about Event Listners

## Closures Demo with Event Listeners

## Scope Demo with Event Listeners

## Garbage Collection & removeEventListeners