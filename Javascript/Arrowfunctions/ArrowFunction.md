# Arrow function (this)

[The best Reference](https://blog.logrocket.com/anomalies-in-javascript-arrow-functions/)

1. Arrow functions cannot be used as constructors and they have no prototype.
   Hence, using the new keyword with an arrow function will usually result in an error.
   (\*tip: Think of Static)

2. Arrow functions do not have arguments object , hence named parameters and rest parameters must be used for function arguments. Duplicate named parameters are also not allowed.

Unlike regular functions, the arguments binding does not exist for arrow functions. However, they have access to the arguments object of a non-arrow parent function.

3. Since accessing the arguments object is obviously the problem here, is there an alternative? The answer is yes. Say hello to ES6 rest parameters.

With ES6 rest parameters, you can get an array that gives you access to all or part of the arguments that were passed to a function. This works for all function flavors, whether regular functions or arrow functions. Here is what it looks like:

```js
const average = (...args) => {
  if (args.length == 0) return 0;
  const sumReduceFn = function(a, b) {
    return a + Number(b);
  };

  return args.reduce(sumReduceFn, 0) / args.length;
};
```

### this(x) -> it always points up to the closest non-arrow parent function.

4. The this binding inside an arrow function cannot be modified, and it always points up to the closest non-arrow parent function.

5. Unlike with regular functions, the arguments object does not exist for arrow functions. However, they can have access to the arguments object of a non-arrow parent function.

```js
function fetchLastScore() {
  return () => {
    console.log(arguments[arguments.length - 1]);
  };
}

fetchLastScore(42, 68, 49, 83, 72)(); // 72
```

6. Arrow functions are perfect for use as callback functions.
   ex) Callback functions are heavily used in asynchronous programs and also in array methods like map(), filter(), forEach(), reduce(), sort(), find(), findIndex(), etc.

### One major source of confusion and errors in a lot of JavaScript programs is the value resolution of "this"

this resolves to different values depending on the scope and context of a function invocation.

7. For example, when a function is invoked with the new keyword, this points to the instance created by the constructor

8. however, when the same function is called without the new keyword, this points to the global object (in non-strict mode) which in the browser environment is the window object.

Here is a simple illustration. In the following code snippet, calling Person() without the new keyword will \*accidentally create a _global variable_ called name because the function is in non-strict mode.

```js
function Person(name) {
  this.name = name;
}

var person = Person("Glad Chinda");

console.log(person); // undefined
console.log(name); // "Glad Chinda"
console.log(window.name); // "Glad Chinda"
```

9. Another common source of confusion with _"this"_ is in DOM event listeners.
   _In event listeners,"this" points to the DOM element the event is targeted at._
   Calling bind() actually returns a new function with the specified this binding.

```js
// Using .bind() on event listener to resolve the value of `this`

ScrollController.prototype.registerScrollHandler = function() {
  this.element.addEventListener(
    "scroll",
    function(event) {
      if (window.scrollY === this.offsets.offsetY) {
        console.log(`${this.offsets.offsetY}px`);
      }
    }.bind(this),
    false
  );
};
```

Here, we wrapped the event listener with parentheses and called the bind() method passing the value of this from the enclosing prototype function. Calling bind() actually returns a new function with the specified this binding. Everything works perfectly now without any errors.

```js
// Using arrow function for event listener
ScrollController.prototype.registerScrollHandler = function() {
  this.element.addEventListener(
    "scroll",
    event => {
      if (window.scrollY === this.offsets.offsetY) {
        console.log(`${this.offsets.offsetY}px`);
      }
    },
    false
  );
};
```

10. With ES6 arrow functions, there is no this binding. Hence, arrow functions use the value of this from their closest non-arrow function ancestor.
