[Inline events vs Event Listeners](https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick)
- Do you need to attach more than one event to an element?
- Will you in the future?
- With inline events, the events can be overwritten.
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
- JavaScript has just one call stack -> Main Thread
- Everythng will be executed through the call stack(Main Thread)
- IF any operation blocks the call stack, it's blocking the Main Thread
- We should NEVER block our Main Thread -> there's just One Stack 
- setTimeout will basically take the call back, and it executes the code sometime later


- IF JavaScript didn't have the FIRST CLASS FUNCTIONS(passing functions to other functions) & call back functions, we can't do async operation.
- Using the Web API(setTimeout) and the call back functions, we can do async operations.


## Deep about Event Listners

**When the event happens, it will call the callback function**
1. The callback function will be stored somewhere first 
2. When the EVENT happens,
3. The callback will automatically comes into the call stack(Main Thread)
4. It will be executed
   

```js
   document.getElementById("clickMe").addEventListener("click", function(){
     console.log('button clicked');
   })

```
## Closures Demo with Event Listeners

- Using a global variable is not a good solution
```js
   let count = 0;
   document.getElementById("clickMe").addEventListener("click", function(){
     console.log('button clicked', ++count);
   })
 //clicked
 // 1
 // 2
 // 3 
```


```js
   function closureEventListners(){
      let count = 0;

            // this callback will form a closure with its outer scope  ("count")
            // ("closureXYZ") has the access to the Closure
            // the callback function is also called "(handler)" in Event Listeners becaues it's handling things when the event happens
            // The "handler" has scopes -> the same lexcial scope 
            // what will be inside the scopes?
             // -> CLOSURE: outer lexical scope(parent) + global scope(global environment) 
            // Clousre -> whenever the callback function is executed, it has the scopes attached to itself. It remembers everything.

      document.getElementById("clickMe").addEventListener("click", function closureXYZ (){
        console.log('button clicked', ++count);
      })
   }

   closureEventListners();
```

## Garbage Collection & removeEventListeners

- Event Listeners is heavy (memory)
- Even when Call Stack is empty, even if codes aren't being executed, it still forms closures -> wasting space -> remove it