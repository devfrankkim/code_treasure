```js
import styled from "styled-components";
const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
      <Input />
      <Input />
      <Input />
      <Button>Just a button</Button>
      <Button as="a" href="/">
        Direct to "/" page
      </Button>
    </Father>
  );
}
export default App;
```
