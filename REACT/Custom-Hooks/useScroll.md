```js
import React, { useEffect, useRef, useState } from "react";

const useScroll = () => {
  const [scroll, setScroll] = useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => {
    setScroll({ x: window?.scrollX, y: window?.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scroll;
};

const App = () => {
  const { y } = useScroll();

  return (
    <h1 style={{ height: "100vh", color: y > 10 ? "red" : "blue" }}> Hello </h1>
  );
};

export default App;
```
