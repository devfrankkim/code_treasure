```js
// styled.d.ts

// import original module declarations
import "styled-components";

// and EXTEND theme!
declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor?: string;
    color?: string;
  }
}
```

```js
// theme.ts

import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  backgroundColor: "#e6328d",
  color: "#fcfcfc",
};

export const darkTheme: DefaultTheme = {
  backgroundColor: "#fcfcfc",
  color: "#e6328d",
};
```

```js
// App.tsx
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";

const H1 = styled.h1`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
`;

type ButtonProps = {
  darkColor?: string | boolean,
  handleMode?: () => void,
};

const Button =
  styled.button <
  ButtonProps >
  `
  color: ${(props) => props.theme.color};
  color: ${(props) => props.darkColor && "blue"};

  background-color: ${(props) => props.theme.backgroundColor};
`;

const App = () => {
  const [isLight, setIsLight] = useState("light");

  const handleMode = () => {
    if (isLight === "light") {
      setIsLight("dark");
    } else {
      setIsLight("light");
    }
  };
  return (
    <>
      <ThemeProvider theme={isLight === "light" ? lightTheme : darkTheme}>
        <H1>Hey</H1>
        <Button>Hello</Button>
      </ThemeProvider>
      <Button onClick={handleMode} darkColor>
        Toggle Mode
      </Button>
    </>
  );
};

export default App;
```

```js
//index.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { darkTheme, lightTheme } from "./theme";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider theme={lightTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
```
