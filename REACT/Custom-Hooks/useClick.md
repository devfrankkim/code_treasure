## useClick

```js
import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const ref = useRef();

  useEffect(() => {
    // 1. 변수를 안에서 copy하지 않으면 warning (ref가 unmount 시점에 null이 된다.)
    const element = ref.current;
    if (element) {
      // 'click' is keyword
      element.addEventListener("click", onClick);
    }
    // ComponentWillUnmount()
    return () => {
      if (element) {
        element.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);

  return ref;
};

const App = () => {
  const sayHello = () => console.log("hey!!");
  const title = useClick(sayHello);

  return <div ref={title}> useClick </div>;
};

export default App;
```
