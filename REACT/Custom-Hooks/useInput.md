### useInput

```js
import { useState } from "react";
import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let willUpdate = true;
    // validator 가 function 이 아니라 다른 타입이 들어오면 validator(value) 이 부분에서 타입에러 터짐.
    if (typeof validator === "function") willUpdate = validator(value);
    if (willUpdate) setValue(value);
  };

  return { value, onChange };
};

export default function App() {
  const maxLen = (value) => value.length <= 3;
  const noEmailFormat = (value) => !value.includes("@");

  const email = useInput("@", maxLen);
  const noAtSign = useInput("", noEmailFormat);

  return (
    <div className="App">
      <h1>Custom Hooks (useInput)</h1>
      <input
        placeholder="Name"
        value={email.value || ""}
        onChange={email.onChange}
      />
      <input placeholder="Name" {...noAtSign} />
    </div>
  );
}
```
