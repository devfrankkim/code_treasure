# Events (window)

window는 조금 다른 이벤트를 가지고 있다.
whenever you make a function that will handle an event,
JavaScript will automatically push the (event) object into your function so you need to be able to handle it.

```js
const title = document.querySelector("#title");

function handleResize(event) {
  console.log(event);
}
function handleClick(event) {
  console.log(event);
  title.style.color = "blue";
}

// Don't call the function immediately!!
window.addEventListener("resize", handleResize);
title.addEventListener("click", handleClick);
```
