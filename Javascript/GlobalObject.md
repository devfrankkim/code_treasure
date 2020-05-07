# What is Global object?

[reference for Global object](https://javascript.info/global-object)

- The global object provides variables and functions that are available anywhere. By default, those that are built into the language or the environment.

- In a browser it is named window, for Node.js it is global, for other environments it may have another name.

- In a browser, global functions and variables declared with var (not let/const!) become the property of the global object:

```js
var gVar = 5;

alert(window.gVar); // 5 (became a property of the global object)
```

If we used let instead, such thing wouldn’t happen:

```js
let gLet = 5;

alert(window.gLet); // undefined (doesn't become a property of the global object)
```

If a value is so important that you’d like to make it available globally, write it directly as a property:

```js
// make current user information global, to let all scripts access it

window.currentUser = {
  name: "John"
};

// somewhere else in code
alert(currentUser.name); // John

// or, if we have a local variable with the name "currentUser"
// get it from window explicitly (safe!)
alert(window.currentUser.name); // John
```

### Using for polyfills

We use the global object to test for support of modern language features.

For instance, test if a built-in Promise object exists (it doesn’t in really old browsers):

```js
if (!window.Promise) {
  alert("Your browser is really old!");
}
```

If there’s none (say, we’re in an old browser),  
we can create “polyfills”: add functions that are not supported by the environment, but exist in the modern standard.

```js
if (!window.Promise) {
  window.Promise = ... // custom implementation of the modern language feature
}
```

### Summary

- [x] The global object holds variables that should be available everywhere.
- That includes JavaScript built-ins, such as Array and environment-specific values, such as window.innerHeight – the window height in the browser.
- [x] The global object has a universal name globalThis.
- …But more often is referred by “old-school” environment-specific names, such as window (browser) and global (Node.js). As globalThis is a recent proposal, it’s not supported in non-Chromium Edge (but can be polyfilled).

- [x] We should store values in the global object only if they’re truly global for our project. And keep their number at minimum.

- [x] In-browser, unless we’re using modules, global functions and variables declared with var become a property of the global object.

- [x] To make our code future-proof and easier to understand, we should access properties of the global object directly, as window.x.
