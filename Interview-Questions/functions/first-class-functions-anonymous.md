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

- Names are useful. Names can be seen in stack traces, call stacks, lists of breakpoints, etc. Names are a Good Thing.

- Naming functions is useful if they need to reference themselves (e.g. for recursive calls)

- Anonymous functions doesn't help when debugging as you can't see the name of the function that causes problems.

- When you do not name a function, later on its harder to understand what it's doing. Giving it a name makes it easier to understand.

```js
setTimeout(function sayMoo() {
    alert('MOO');
    setTimeout(sayMoo, 5000);
}, 1000);
/*
It would be impossible to write this code quite this cleanly if the function expression passed to setTimeout were anonymous; we would need to assign it to a variable instead prior to the setTimeout call. This way, with a named function expression, is slightly shorter and neater.
*/
```

- One key thing about a named function expression is that it creates an in-scope identifier with that name for the function within the functon body:
```js
let x = function example() {
    console.log(typeof example); // "function"
};
x();
console.log(typeof example);     // "undefined"
```

- With named function expressions, the name of the function expression is enclosed within its own scope. It doesn't get declared in the outer scope.

```js
function a(){
    console.log('a called')
}

let namedExpression = function nameExpress(){
  console.log("It expresses like a value with NAME")
}

a();
namedExpression();
nameExpress(); // Uncaught ReferenceError: nameExpress is not defined

/*
"nameExpress" is not created in the outer scope(global scope)
it is created as a local variable
- you can access the function inside the function
*/

let b = function nameExpress(){
  console.log(nameExpress, 'calling the function inside')
}
b();
/*
    ƒ nameExpress(){
        console.log(nameExpress, 'calling the function inside')
    } "calling the function inside"
*/
nameExpress(); // Uncaught ReferenceError: nameExpress is not defined


function compareBy(propName) {
    return function (a, b) {
        let x = a[propName],
            y = b[propName];

        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1
        } else {
            return 0;
        }
    }
}

let products = [
    {name: 'iPhone', price: 900},
    {name: 'Samsung Galaxy', price: 850},
    {name: 'Sony Xperia', price: 700}
];

console.log('Products sorted by name:');
products.sort(compareBy('price'));

console.table(products);

	
 index  |       name       |  price
    0	  "Sony Xperia"	    700
    1	  "Samsung Galaxy"	850
    2	  "iPhone"	        900
```







