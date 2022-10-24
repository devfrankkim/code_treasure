# What's the difference between throw Error('msg') vs throw new Error('msg')?

```js
var err1 = Error("message");
var err2 = new Error("message");
// Which one is correct and why?
```

- Both are fine; the function call Error(…) is equivalent to the object creation expression new Error(…) with the same arguments.
