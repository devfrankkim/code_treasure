```js
export const DaysButton = {
  primary: "#87CEEB",
  color: "white",
  border: "none",
};

<Button key={item.day} style={DaysButton}>
  Day {item.day}
</Button>;
```

```js
import styled, { css } from "styled-components";

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  padding: 6px 12px;
  border: 1px solid lightgray;
  border-radius: 8px;

  cursor: pointer;

  font-size: 1rem;
  line-height: 1.5;

  ${({ style }) =>
    style && style.primary
      ? css`
          color: ${style.color};
          background: ${style.primary};
          border-color: navy;
          border: ${style.border};
        `
      : css`
          color: red;
          background: white;
          border-color: navy;
        `}
`;
```
