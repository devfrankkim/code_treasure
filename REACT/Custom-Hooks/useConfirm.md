```js
import React, { useEffect, useRef } from "react";

const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function" || typeof rejection !== "function") return;

  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };

  return confirmAction;
};

const App = () => {
  const handleConfirm = () => console.log("handling confirm");
  const rejectConfirm = () => console.log("rejecting confirm");
  const confirm = useConfirm("Are you sure?", handleConfirm, rejectConfirm);

  return <div onClick={confirm}> useClick </div>;
};

export default App;
```
