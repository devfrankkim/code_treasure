# What is bind? call? apply?

```js
var obj = { num: 2 };
var functionName = function(arg1, arg2, arg3) {};

// call
functionName.call(obj, arg1, arg2, arg3);
//apply
functionName.apply(obj, [arg1, arg2, arg3]);
// bind
var bound = functionName.bind(obj);
bound(arg1, arg2, arg3);
```

**Summary bind**

1. you only pass an object itself
2. bind an object to a function
3. bind returns a function
4. and then you can execute it by passing the arguments
5. reference it using 'this'

**Summary call functionName.call(obj,functionArguments)**

```
pass two arguments.
```

1. object you are applying
2. The argument for the function itself ex) function(a)

**Summary apply**

1. You can create an array
2. you just pass an array through arguments

### Create a function that's going to print out. We can use the two objects without using an argument

```js
let c1 = {
  x: 5,
  y: 10
};

let c2 = {
  x: 100,
  y: 200
};

// object + function => call
function printCoordinates() {
  console.log(this); // Window

  // no arguments or parameters
  console.log(`x: ${this.x}  y: ${this.y}`);
}

window.x = 1;
window.y = 1;
printCoordinates(); // undefined, undefined  => binding to the window object

// pass the c1 object to the function
let c1_func = printCoordinates.bind(c1); // 5, 10
let c1_func = printCoordinates.bind(c2); // 100, 200

// include an object to a function
// Reference it using 'this'
```

# call

**pass two arguments. 1. object you are applying 2. the argument for the function itself**

**functionName.call(obj,functionArguments)**

```js
var obj = { num: 2 };

var addToThis = function(a) {
  return this.num + a;
};

addToThis.call(obj, 10);
// pass two arguments. 1. object you are applying 2. the argument for the function itself
```

```js
var obj = { num: 2 };

// how do I pass three arguments?
var addToThis = function(a, b, c) {
  return this.num + a + b + c;
};

// write here directly but the first argument has to be the object you are calling
addToThis.call(obj, 10, 20, 30);
```

# Create Array => apply

```js
// instead of passing the arguments, you can pass the array
// addToThis.apply(obj, 10, 20, 30);
var arr = [1, 2, 3];
addToThis.apply(obj, arr); // 8
```

```js
var obj = { num: 2 };
var obj2 = { num: 5 };

var addToThis = function(a, b, c) {
  return this.num + a + b + c;
};

var arr = [1, 2, 3];
addToThis.apply(obj, arr); // 8
addToThis.apply(obj2, arr); // 11
```

# Bind

```js
var obj = { num: 2 };

var addToThis = function(a, b, c) {
  return this.num + a + b + c;
};

var arr = [1, 2, 3];
// addToThis.bind(obj, arr);
var bound = addToThis.bind(obj);
bound(); // functino bound()
bound(1, 1, 1); // 5
```

bind gives me a function
object + function
bind gives you a function back.

basically bind allows you to force a particular value of "this"
and it will return a new function that you can then call

```js
console.log(this);
let arrow = () => this;
console.log(arrow); // () => this;
console.log(arrow()); // Window;
```

```js
// need to assign it to another variable because it's returning a new function
let arrow = () => this;
var newFun = arrow.bind("hello");
console.log(newFun()); // window
```

```js
function normal() {
  console.log(this);
}
var newFun = normal.bind("normal"); // normal.bind("normal")();
console.log(newFun()); // String{"normal"}
```

```
The whole point of the arrow function is
to get the value of "this" from the parent context

That's the point.
You can't change the value of "this" for arrow functions even if the bind function gets called on it.
It doesn't change the value of "this"

so if you need to explicitly state what the value of this should be
you need to use a normal function and then you use the bind method.
```
