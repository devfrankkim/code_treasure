# NodeList(entries(), keys(), values(), forEach()) vs HTMLCollection

## both a NodeList and HTMLCollection are collections of DOM nodes.

### The difference is that while a NodeList can contain any node type, the HTMLCollection is going to only to contain any node Element.

So what is the difference between a node element and a node type?

Nodes: in the DOM, everything is a node and every node is an object. The name node is used as a generic term, for everything.

Element: is one specific type of node. It can be a list item, a div, the body, the window, whatever, but its a specific type.

Now we can see what the difference between a nodeList is and what a node element is:

In the end, one is general and one is specific lists of nodes.
It's important to know simply because you should know what you are returning and for more advanced JavaScript issues such as speed,
in the case of static NodeLists vs Live NodeLists.

### However, in addition to that, HTMLCollection items can also be accessed by their name and ID. That is not the case with JavaScript NodeList.

### On the other hand, JavaScript list collection can contain attribute nodes as well as text nodes. and the items can only be indexed by number. That is not possible when using HTMLCollection.

### HTMLCollection and NodeList are not arrays, so they do not work with array methods like push(), pop(), join() or valueOf(). However, you can loop through them

- HTMLCollection is a collection of HTML elements,
- while a NodeList is a collection of element nodes.

They both have a length property to display the number of items in a collection,
each of which can be accessed by their index number.

### NodeList: Summary

- A node list is a collection of nodes. It should not be confused with arrays.

- JavaScript NodeList is similar to HTMLCollection, but NodeList items can only be targeted with their index number.

- You can use querySelectorAll() method to get a JavaScript NodeList

- The length property is used to get the number of nodes in a list. It is very useful in looping
