# padStart() & padEnd() & toFixed() & parseFloat()

[reference](https://alligator.io/js/padstart-padend-string-methods/)

Both methods work in the same way, with the only difference being that with padStart the padding is added at the start of the string and with padEnd the padding added at then end.

```js
var a = 3;
a.toString().padStart(3, "0"); // "003"
console.log(a); // 3

a.toString().padEnd(3, "0"); // "300"
console.log(a); // 3
```

### toFixed() method formats a number using fixed-point notation.

_toFixed // how many numbers after point(.)?_
[refernece for parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)

```js
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

console.log(financial(123.456));
// expected output: "123.46"

console.log(financial(0.004));
// expected output: "0.00"

console.log(financial("1.23e+5"));
// expected output: "123000.00"
```

### parseFloat() returns a floating point(.) number

[refernece for parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

```js
function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference(4.567));
// expected output: 28.695307297889173

console.log(circumference("4.567abcdefgh"));
// expected output: 28.695307297889173

console.log(circumference("abcdefgh"));
// expected output: NaN
```
