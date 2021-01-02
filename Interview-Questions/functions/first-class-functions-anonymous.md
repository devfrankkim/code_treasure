## FIRST CLASS FUNCTIONS & Anonymous Functions
### Note that functions are the first-class citizens in JavaScript, so you can pass a function to another as an argument.
[Check the source for first-class citizens in JavaScript](https://www.javascripttutorial.net/javascript-functions-are-first-class-citizens/)

- Passing a function to another function
- In other words, you can treat functions like values of other types.
- Storing functions in variables

  
```js
// ======= Storing functions in variables =======
function add(a, b) {
    return a + b;
}

let sum = add;


//  ======= The following declares the average() function that takes three arguments. The third argument is a function: =======
function average(a, b, fn) {
    return fn(a, b) / 2;
}

// ======= Now, you can pass the sum function to the average() function as follows: =======
let result = average(10, 20, sum);
```
```js
// Put it all together:

function add(a, b) {
    return a + b;
}

let sum = add;

function average(a, b, fn) {
    return fn(a, b) / 2;
}

let result = average(10, 20, sum);

console.log(result); // 15
```


- ***Function Statement vs Function Expression vs Function Declaration***

***Function Statement aka Function Declaration***

- This way of creating a function is known  -> function Statement
- Function statements require a function name
- Also known as Function Declaration

```js
a(); // a function called

function a() {
    console.log("a function called")
}
a(); // a function called

```

***Function Expression***

- you can assign the functions to variables
- functions act like values 
- The beauty of JavaScript

```js
b(); // Uncaught ReferenceError: b is not defined

let b = function(){
  console.log("It expresses like a value")
}
b(); // It expresses like a value
```

### The difference between Function Statement and Function Expression 

- Hoisting
- function statement can be called before delcaration because of memory creation phase
- Function Expression can't be called before declaration because it's just a variable in the memory
- Function Expression will just be `undefined` in the memory creation phase like other variables until it reaches the line
  
***Anonymous Function***

- Does not have its own identity 
- It looks similar to function statements(function declarations) but NO NAME
- Function statements require a function name
- so what is this for? -> when functions are used as values
- You can assign it to variables
- We often use anonymous functions as arguments of other functions. For example:
- Immediately invoked function execution
- Arrow functions


```js

function(){ 

}

// We often use anonymous functions as arguments of other functions. 

setTimeout(function () {
    console.log('Execute later after 1 second')
}, 1000);

// - Immediately invoked function execution
(function() {
    console.log('IIFE');
})();

// sometimes, you may want to pass arguments into it, like this:
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

(function () {
    console.log(`${person.firstName} ${person.lastName}`);
})(person);

// - Arrow functions
let show = function () {
    console.log('Anonymous function');
};

let show = () => console.log('Anonymous function');
```

***Named function Expression***












