```js
import React, { useEffect, useRef, useState } from "react";

const useNetwork = (callbackFn) => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = () => {
    if (typeof callbackFn === "function") {
      callbackFn(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return status;
};
const App = () => {
  // Network: online or offline
  const handleNetwork = (onlineStatus) => {
    console.log(onlineStatus ? "we went online" : "we went offline");
  };

  const onlineStatus = useNetwork(handleNetwork);

  return <h1>{onlineStatus ? "online" : "offline"}</h1>;
};

export default App;
```
