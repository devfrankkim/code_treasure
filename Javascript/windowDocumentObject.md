# JavaScript (Window - The Browser Object Model) & document

1. [reference](https://www.w3schools.com/js/js_window.asp)
2. [really good reference](http://net-informations.com/js/iq/screen.htm)

## Window

### Window is the object of browser, it is not the object of javascript.

### The javascript objects are string, array, date etc.

### The most important/frequently used object under the window object is the "document" object. It contains the rendered HTML of the current page.

The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.

- Scripts use javascript to parse this document object and manipulate them to change the look and feel of the page dynamically.

- When running your script in a page, all globally declared functions and variables are in the window object’s scope.

- In short, window object is the context of the current tab/window of your browser. Your page exists because the window object does.

* The window is the first thing that gets loaded into the browser

* The window object represents a window in browser. An object of window is created automatically by the browser.

* The window object represents the current browsing context

* Window object holds things like window.location, window.history, window.screen, window.status, or the window.document

```
This window object has the majority of the properties like length, innerWidth, innerHeight, name, if it has been closed, its parents, and more.

Each browser tab has its own top-level window object. Each of these windows gets its own separate global object.

window.window always refers to window, but window.parent and window.top might refer to enclosing windows, giving access to other execution contexts.

Moreover, the window property of a window object points to the window object itself. So the following ststements all return the same window object:


window.window
window.window.window
window.window.window.window


window does nest the document
window.document

*Array !== HTMLCollection*
document.getElementById('element')
document.getElementsByClassName('element')
```

### The Window Object

The window object is supported by all browsers. It represents the browser's window.

All global JavaScript objects, functions, and variables automatically become members of the window object.

Global variables are properties of the window object.

Global functions are methods of the window object.

Even the document object (of the HTML DOM) is a property of the window object:

```
window.innerHeight - the inner height of the browser window (in pixels)
window.innerWidth - the inner width of the browser window (in pixels)

window.open() - open a new window
window.close() - close the current window
window.moveTo() - move the current window
window.resizeTo() - resize the current window

```

```js
window.document.getElementById("header");

// is the same as:

document.getElementById("header");
```

### Document

- The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.

- When an HTML document is loaded into a web browser , it becomes a document object.

- It is the root node of the HTML document.

- The document actually gets loaded inside the window object and has properties available to it like title, URL, cookie, etc. HTML documents, served with the "text/html" content type, also implement the HTMLDocument interface, whereas XML and SVG documents implement the XMLDocument interface.

window.document
window["document"]

window - browser
document - screen, page(tab)

window.resizeTo(200, 200)

you can omit window

window.alert()
alert()

- window is a very important object
- The window object is the Global Object in the browser.
  Any Global variables or functions can be accessed as properties of the window object

전역 변수는 전역 객체의 속성이 된다.

```js
var a = "b";
window.a; // "b"

function remember() {
  var weight = 300;
}
remember();

window.weight; // undefined
```

the variables inside the functions aren't going to be the window object.
It's because of a thing called "SCOPE"

함수안에 variable 들어 있을 때는 window로 설정되지 않는다.

window is not a JS syntax
browser가 window 객체를 만든다.

two things that run JavaScript => Browser & Node

Node doesn't have window because he doesn't want it.

### What is Global object?

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
