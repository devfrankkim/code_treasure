```js
import { useState, useEffect } from "react";
import "./styles.css";

// ONLY: componentDidMount, componentDidUpdate
const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };

  useEffect(updateTitle, [title]);

  return setTitle;
};

export default function App() {
  const updateTitleName = useTitle("Loading...");

  useEffect(() => {
    setTimeout(() => updateTitleName("HEY Title"), 3000);
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
    </div>
  );
}
```
