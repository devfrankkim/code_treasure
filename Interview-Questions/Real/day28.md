### difference between arrow function vs function

```js
function arrowFunc() {
  return arguments.length;
}
console.log(arrowFunc(1, 2, 3)); // 3
```

```js
const arrowFunc = () => arguments.length;
console.log(arrowFunc(1, 2, 3)); // Uncaught ReferenceError: arguments is not defined
```
