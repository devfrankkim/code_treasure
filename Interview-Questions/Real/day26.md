### How do you verify that an argument is a Number or not

- The combination of IsNaN and isFinite methods are used to confirm whether an argument is a number or not.

```js
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
```
