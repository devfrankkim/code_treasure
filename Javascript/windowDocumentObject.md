# JavaScript (Window - The Browser Object Model) & document

1. [reference](https://www.w3schools.com/js/js_window.asp)
2. [really good reference](http://net-informations.com/js/iq/screen.htm)

### Window

The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.

- The window is the first thing that gets loaded into the browser

- The window object represents the current browsing context

- Window object holds things like window.location, window.history, window.screen, window.status, or the window.document

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
