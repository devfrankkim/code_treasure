# GlobalStyles(reset) and Header

styled-components는 LOCAL하다.

NOW,
GlobalStyles

Global 스타일을 하는 이유는 해당 사이트의 폰트를 설정하거나
styled-components를 설치하거나 그런 것들을 하고 싶어서다.

=>
install
`yarn add styled-reset`

styled-reset은 styled-component를 이용해서
브라우저들을 reset 값으로 변경을 시켜주면서 본인의 CSS로 꾸밀 수 있게 해준다.

GlobalStyles.js 파일 생성

```js
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }

    body{
        font-family:-apple stuff,
        font-size: 14px;
        background-color: black;
    }
`;
export default globalStyles;
```

새로운 컴포넌트를 만든다.
이 컴포넌트는 어떤 컴포넌트들에 스타일을 넣지 않고, Global한 웹사이트에 스타일을 넣어준다.

import <globalstyles> in App.js

이런식으로 styled-component에 Default 스타일을 추가 할 수 있다.
