# textConent & innerText & innerHTML & nodeValue

1. innerHTML parses content as HTML, so it takes longer.
2. nodeValue uses straight text, does not parse HTML, and is faster.
3. textContent uses straight text, does not parse HTML, and is faster.
4. innerText Takes styles into consideration. It won't get hidden text for instance.

[reference](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_textcontent_innertext)

textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows “human-readable” elements.

textContent returns every element in the node. In contrast, innerText is aware of styling and won’t return the text of “hidden” elements.

Unlike textContent, altering innerText in Internet Explorer (version 11 and below) removes child nodes from the element and permanently destroys all descendant text nodes. It is impossible to insert the nodes again into any other element or into the same element after doing so.

## innerHTML

Element.innerHTML returns HTML, as its name indicates.
Sometimes people use innerHTML to retrieve or write text inside an element, but textContent has better performance because its value is not parsed as HTML.  
Moreover, using textContent can prevent XSS attacks.

### Difference

.textContent outputs text/plain while .innerHTML outputs text/html.

The textContent property will not understand that the code you pass is an HTML syntax, but just a 100% text no more and no less.

[reference from w3.org why we shouldn't use innerHTML to add text](https://www.w3.org/TR/2008/WD-html5-20080610/dom.html#innerhtml0)

```js
<p id="yes"> yes!! </p>;
var p = document.getElementById("yes");
p.textContent = "hello!";
p.textContnet = "<em>Hello</em>"; //  rendering texts only.
p.innerHTML = "<em>Hello</em>"; // rendering html & texts
```
