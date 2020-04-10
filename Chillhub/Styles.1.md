# styled-components, className(random, local)

import styled from 'styled-components'

const List = styled.ul`display:flex; &:hover{ background-color:blue}`

\*Component <List/>

styled-components는 class 이름을 Random, Local로 변경 해준다.

```js
<header>
 <List>

 </List>
</header>

// CSS module
<header>
 <ul className={styles.navList}>

 </ul>
</header>
```

AND,  
{Link}은 해당 페이지가 내 어플리케이션에 있으면,
그 곳으로 브라우저 방식으로 가지 않고, JavaScript 방식으로 가게 해준다.

이 Link에 스타일을 주고 싶으면, a tag는 사용하기 싫고, Link를 사용하고 싶다면,

const FontLINK = styled.(Link)``;  
이런식으로 Link에 스타일을 추가할 수 있고, Link로 사용할 수 있다.

href는 React Router에는 존재하지 않는다.  
`<FontLINK to="/user">USER</FontLINK>`

You should not use <Link> outside a <Router>
