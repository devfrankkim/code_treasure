### What is the difference between function and class declarations

- The main difference between function declarations and class declarations is hoisting. The function declarations are hoisted but not class declarations.

```js
// Classes:

const user = new User(); // ReferenceError

class User {}
```

```js
// Constructor Function:

const user = new User(); // No error

function User() {}
```
