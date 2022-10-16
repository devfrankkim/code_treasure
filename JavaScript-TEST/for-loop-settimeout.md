```js
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i);
}
//But the output is unexpected:

5;
5;
5;
5;
5;
// Can you fix it to be?
0;
1;
2;
3;
4;

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i);
}

// The reason this happens is because each timeout is created and then i is incremented. Then when the callback is called, it looks for the value of i and it is 5.
// The solution is to create a *closure* so that the current value of i is stored. For example:

for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, i);
  })(i);
}
```
