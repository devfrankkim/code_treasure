# append() vs appendChild()

## The goal is to know the difference between append and appendChild

### The main difference is that appendChild is a DOM function meanwhile append is a JavaScript function.

### append('Allows TEXT, Node objects) accepts Node objects and DOMStrings while appendChild accepts only Node objects('NO TEXT', only Node objects)

[Reference](https://dev.to/ibn_abubakre/append-vs-appendchild-a4m)

1. append() allows you to also append DOMString objects, whereas Node. appendChild() only accepts Node objects.
2. append() has no return value, whereas Node. appendChild() returns the appended Node object.
3. append() can append several nodes and strings, whereas Node. appendChild() can only append one node.

Imagine that you want to put something inside a div from your HTML. Like a simple String.

You CAN make this:

```js
document.getElementById("yourId").append("Hello");
```

But what happens if you try to make the same with appendChild?

```js
document.getElementById("yourId").appendChild("Hello");
```

Your console show this error:

```js
“Uncaught TypeError: Failed to execute ‘appendChild’ on ‘Node’: parameter 1 is not of type ‘Node’.”
```

_In all cases where you can use appendChild, you can use append. But not in reverse._
