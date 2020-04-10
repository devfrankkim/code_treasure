# styled-compomnents can pass props!!

styled-components에서는 props를 줄 수 있다.

You can give props to your SC(styled-components)

```js
const Item = styled.li`
    border-bottom: 5px solid ${props => props.current? "blue" : "transparent"}
`

<Item current={false}>
<Item current={true}>
```
