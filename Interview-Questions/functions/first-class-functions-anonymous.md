## FIRST CLASS FUNCTIONS & Anonymous Functions

- ***Function Statement vs Function Expression vs Function Declaration***

***Function Statement***

- This way of creating a function is known  -> function Statement

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
  






