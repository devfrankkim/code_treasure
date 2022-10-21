### How to access DOM elements in React?

```
Answer
One of the useful application of the useRef() hook is to access DOM elements. This is performed in 3 steps:

Define the reference to access the element const elementRef = useRef();
Assign the reference to ref attribute of the element: <div ref={elementRef}></div>;
After mounting, elementRef.current points to the DOM element.
```

```js
import { useRef, useEffect } from "react";

function AccessingElement() {
  const elementRef = useRef();

  useEffect(() => {
    const divElement = elementRef.current;
    console.log(divElement); // logs <div>I'm an element</div>
  }, []);

  return <div ref={elementRef}>I'm an element</div>;
}
```
