# Array.slice() & Array.splice() (shallow copy & deep copy)

### slice() {?start , ?end}

slice() doesn't change the array!!!

### splice() {?start , ?deleteCount, ?replace}

splice() actually deletes the original array!!!

### slice() is just shallow copy cutting.

```js
var arr = [1, 2, 3, 4, 5];
var a = arr.splice(0, 1, 100);
console.log(a); //[1]
console.log(arr); // [100, 2, 3, 4, 5]
```

```js
var arr = [1, 2, 3, 4, 5];
var a = arr.slice();
console.log(a); //[1, 2, 3, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5];
```

### splice() is real cutting the array and then connect the left ones.

```js
var arr = [1, 2, 3, 4, 5];
var a = arr.splice();
console.log(a); //[]
console.log(arr); // [1, 2, 3, 4, 5];
```

### splice(0) will cut(delete) everything

```js
var arr = [1, 2, 3, 4, 5];
var a = arr.splice(0);
console.log(a); //[1, 2, 3, 4, 5]
console.log(arr); // [];
```

```js
let arr = [1, 2, 3, 4, 5];

console.log(arr.slice(0, 3)); // [1,2,3]
console.log(arr); // [1, 2, 3, 4, 5];
console.log(arr.splice(0, 3)); //[1,2,3]
console.log(arr); //[4, 5]
console.log(arr.splice(1));
console.log(arr);
```
