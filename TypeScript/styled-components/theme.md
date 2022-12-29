```js
// ============= styled.d.ts =============
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    red: string;
    black: {
      veryDark: string;
      darker: string;
      lighter: string;
    };
    white: {
      darker: string;
      lighter: string;
    };
  }
}
```

```js
// ============= theme.ts =============
import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  red: "#E51013",
  black: {
    veryDark: "#141414",
    darker: "#181818",
    lighter: "#2F2F2F",
  },
  white: {
    lighter: "#fff",
    darker: "#e5e5e5",
  },
};

export default theme;
```

```js
// ============= index.tsx =============
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </BrowserRouter>
);

```
