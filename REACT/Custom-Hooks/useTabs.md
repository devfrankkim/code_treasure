```js
import { useState } from "react";
import "./styles.css";

const CONTENT = [
  {
    tab: "tab 1",
    article: "article 1",
  },
  {
    tab: "tab 2",
    article: "article 2",
  },
];

// get CONTENT of the index
const useTabs = (initialTab, allTabs) => {
  // kill the function if not array or doesn't exist
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  const [currentIndex, setCurrentIndex] = useState(initialTab);

  console.log(allTabs[currentIndex]);

  return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};

export default function App() {
  const { currentItem, changeItem } = useTabs(1, CONTENT);

  return (
    <div>
      {CONTENT.map((section, index) => (
        <div key={`content_${index}`}>
          <button onClick={() => changeItem(index)}>{section.tab}</button>
          <hr />
        </div>
      ))}
      {currentItem.article}
    </div>
  );
}
```
