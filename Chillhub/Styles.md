# CSS global => CSS local & CSS.module(JavaScript Object)

```js
[style.css];

.nav ul{
display:flex;
}

import "style.css" in (index.js)

className ="nav"

component-css different files
컴포넌트의 장점 => 캡슐화 (everything in the same place)

=>
Header 폴더
index.js
import Header from "./Header"
export default Header

index를 넣는 이유는 내 어플리케이션에서 이런 식으로 Header를 호출하고 싶기 때문이다.
이런 형태는 기본적으로 index 파일을 보게 해준다.
if there's no index.js => import Header from "Components/Header/Header"

대신에,
index에서 header를 import하고 index에서 header를 export한다.
Components/Header 처럼 폴더를 간결하게 할 수 있다.
폴더 정리를 index.js에서 정리할 수 있다.

NOW,
styles를 Header안으로 넣을 수 있다.

전체에서 import사용하는 것보다 해당 Component에서 처리하는게 좋다.
Header.css, Header.css, index.js

NOW,
사용할 때마다, CSS를 import 해줘야 된다. 그리고 마지막에 className을 일일히 다 기억해야 된다.
\*\*\* className이 반복되지 않게 기억해야 된다.
this is a pain in the ASS
다른 컴포넌트에서 nav라는 className을 반복하지 않는 건 힘들다.
왜냐하면, 지금 CSS는 global로 작동한다.
CSS STAYS GLOBAL.
We don't want global CSS

NOW,
자신의 컴포넌트에서만 작동하는 CSS를 원한다. 다른곳에 영향을 주면 안된다.

NOW,
CSS 모듈을 이용하는 거다.
이건 className을 randomize한다. which means, CSS global이 아닌, local이 되게 한다.

[Header.js]

<header className="nav">

[Header.css]
.nav ul{
display:flex
}

\*아래처럼 바꾼다.

.navList {
display:flex;
}

1. create-react-app으로 만든 프로젝트에서는 이런식으로 file 이름을 module형식으로 바꾼다.
   => Header.module.css

2. HOWEVER, 자바스크립트 오브젝트를 import하는 것 처럼 바꿔줘야 한다.
   => import styles from "./Header.module.css"

3. 마지막으로 className을 자바스크립트 오브젝트 형식으로 사용한다.

import styles from "./Header.module.css"

<header>
 <ul className={styles.navList}>

 </ul>
</header>

이렇게 되면 내 className을 받아서, className을 랜덤화 시켜준다.
css.module + 자바스크립트 오브젝트.

- 자바스크립트 오브젝트로 만들어줘서 다른 곳에서도 쓸 수 있게 만들어준다.
  => Header.module.css + className={styles.navList}

instead of importing css + className

\*이렇게 하면 navList라는 걸 다른 파일에서도 반복해서 사용할 수 있게 된다.
그리고 그곳에서도 className이 Random화 될 것 이다. (more safe as well)

.navList.hover{
background-color: blue
}

BUT,
the only thing I don't like is, you still need to remember classNames!!!!
여전히, 자바스크립트와 CSS의 거리는 떨어져 있다.
이 두개의 파일을 한곳에서 뭉쳐서 보여줄 수 있다.

if
.nav-list{
display:flex;
}
styles["nav-list"](O)
styles.nav-list (X)

왜냐하면 자바스크립트에서는 - 것을 쓸 수가 없다.

AND,

.navList{
display:flex
}
.navList:hover{
background-color:blue;
}

\*scss를 쓰는 방법도 똑같다.
Header.module.scss +

.navList{
display:flex;
&:hover{
background-color:blue;
}
}

NOW,

```

```

```
