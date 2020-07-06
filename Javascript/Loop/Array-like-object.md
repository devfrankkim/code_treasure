# What's the difference between Array and Array-like objects

### One is an array, and the other is an object. One has array methods, the other may or may not.

```js
var ao1 = { length: 0 }; // like []
var ao2 = { 0: "foo", 5: "bar", length: 6 }; // like ["foo", undefined × 4, "bar"]
```

### You can convert Array-like Objects to their Array counterparts using Array.prototype.slice

```js
var arr = Array.prototype.slice.call(ao1); // []
arr; // []
```

### Whats the difference between it and a normal array?

It's not constructed by Array or with an Array literal [], and so (usually) won't inherit from Array.prototype.

The length property will not usually automatically update either.

```js
ao1 instanceof Array; // false
ao1[0] = "frank";
ao1; // {0: "frank", length: 0}
ao1[2] = "andrea";
ao1; // {0: "frank", 2: "andrea", length: 0}
ao1.length; // 0, did NOT update automatically
```

### In array-like the join(), concat(), includes() etc, methods are not a functions:

```js
var realArray = ["frank", "andrea"];
var arrayLike = document.forms;

typeof arrayLike; // returns "object"
typeof realArray; // returns "object"

// The array like is not really an array:

arrayLike.join(", "); // returns Uncaught TypeError: arrayLike.join is not a function (also relevant to `concat()`, `includes()` etc.)
realArray.join(", "); // "frank, andrea"

// In array like you can't set the length property:3

arrayLike.length = 1;
arrayLike.length; //return 2; //there are 2 forms in the DOM.
realArray.length = 1;
realArray.length; //return 1;

realArray; //  ["frank"]
```

### What's the difference between an array-like object and a normal object?

There is no difference. Even normal Arrays are Objects in JavaScript

```js
ao1 instanceof Object; // true
[] instanceof Object; // true
```

### Question

```js
Array.isArray(Object.create(Array.prototype)); // false

const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`name: ${this.name}. Human: ${this.isHuman}`);
  }
};

const me = Object.create(person);
me; // {}
me.isHuman; // false
me.printIntroduction(); // name: undefined. Human: false

me.name = "frank"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

// After Object.create() and make objects

me; // {name: "frank", isHuman: true}
me.isHuman; // true
me.printIntroduction(); // name: frank. Human: true
```

```js
function Foo() {}

Foo.prototype = Object.create(Array.prototype); // Array {}

f = new Foo();
f[0] = 1;
f[1] = "frank";
f; // Foo {0: 1, 1: "frank"} __proto__: Array
f.length; // 0
```

### How to convert an array-like object like NodeList to a real Array

- Array.prototype.slice.call(arrLike);
- Array.from(arrLike);
- [...arrLike];

```js
const arrLike = document.querySelectorAll("div");
console.log(arrLike); // NodeList(2) __proto__ : NodeList

let array1 = Array.prototype.slice.call(arrLike);
let array2 = Array.from(arrLike);
let array3 = [...arrLike];

console.log(array1); // (8) [div, div] __proto__: Array(0)
console.log(array2); // (8) [div, div] __proto__: Array(0)
console.log(array3); // (8) [div, div] __proto__: Array(0)
```
