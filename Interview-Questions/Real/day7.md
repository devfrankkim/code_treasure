### What is the difference between == and ===?

- == is the abstract equality operator.
- === is the strict equality operator.
- The == operator will compare for equality after doing any necessary type conversions.
- The === operator will not do type conversion, so if two values are not the same type === will simply return false.
- When using ==, funky things can happen, such as:

```js
1 == "1"; // true
1 == [1]; // true
1 == true; // true
0 == ""; // true
0 == "0"; // true
0 == false; // true
```

- Dp not use the == operator, except for convenience when comparing against null or undefined, where a == null will return true if a is null or undefined.

```js
var a = null;
console.log(a == null); // true
console.log(a == undefined); // true
```
