### hasOwnProperty vs Prototype

### hasOwnProperty allows us to test only for properties we have manually created on the current object.

```js
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(obj); // {a: 1, b: 2, c: 3} [[Prototype]]: Object
/*
    constructor: ƒ Object()
    hasOwnProperty: ƒ hasOwnProperty()
    isPrototypeOf : ƒ isPrototypeOf()
    ...
*/

Object.prototype.toText = () => console.log("accessing prototype");

console.log(obj); // {a: 1, b: 2, c: 3} [[Prototype]]: Object
/*
    toText : () => console.log('accessing prototype')
    constructor: ƒ Object()
    hasOwnProperty: ƒ hasOwnProperty()
    isPrototypeOf : ƒ isPrototypeOf()
    ....
*/
```

```js
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
const copy = {};
let sum = 0;
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    sum += copy[key] = obj[key] * 2;
  }
}
// sum => 2 + 4 + 6 = 12
```

### Accessing Prototype vs Accessing Object property only.

```js
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key);
  }
}
// 'a', 'b', 'c'

for (let key in obj) {
  console.log(key);
}
// 'a', 'b', 'c', 'ToText'
```
