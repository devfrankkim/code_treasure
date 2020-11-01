# function & JS DOM Functions #Examples

## DOM (Document Object Model) => JavaScript will take all the elements you have.

1. 자바스크립트는 HTML에 있는 모든 요소를 가지고 온다. 그리고 Object로 바꾼다.

2. Object has many keys.

ex) title.innerHTML = "Hi!! from JavaScript"

### console.dir will show you all the properties of the element has

3. QuerySelector는 노드의 첫번째 자식을 반환한다. It's like CSS selector

## DOM manipulation

```js
console.log(document);
// HTML presentation of document. HTML document는 자바스크립트가 된다.
<h1 id="title">This works!!</h1>;
const title = document.getElementById("title");

// get html from JS
console.log(title);
```

```js
console.dir;
```

## Function

```js
const caculator = {
  plus: function(a, b) {
    return a + b;
  }
};

const plus = calculator.plus(5, 5);
console.log(plus);
```
