```js
import React, { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 1) => {
  const element = useRef();

  useEffect(() => {
    if (typeof duration !== "number") return;

    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  // return { element, style: { opacity: 0 } };

  // Set ref by default
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInObj1 = useFadeIn(2, 2);
  const fadeInObj2 = useFadeIn(6, 3);

  console.log(fadeInObj2);

  return (
    <>
      <h1 {...fadeInObj1}> #number 1 </h1>
      {/* <h1 ref={fadeInObj2.element} style={fadeInObj2.style}> */}
      <h1 {...fadeInObj2}>#number 2</h1>
    </>
  );
};

export default App;
```
