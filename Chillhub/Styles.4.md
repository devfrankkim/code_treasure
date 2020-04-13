# withRouter(props)

Connect Header component and make him aware of where we are.
Header의 위치를 알려주기 위해
withRouter를 import 한 후, 사용한다.

```js
import { withRouter } from "react-router-dom";
```

withRouter는 다른 컴포넌트를 감싸는 컴포넌트다.

1. withRouter wraps another Component
2. And gives him the information(props) of the Router.

withRouter > Header  
withRouter로 Header 컴포넌트를 덮었다.  
그러므로 props에 접근할 수 있다.  
history, location, match는 from Router

withRouter가 덮어주므로 props를 전달할 수 있다.

Because of withRouter, 어떤 컴포넌트와도 연결할 수 있다.

location의 pathname을 가지고 와야 한다.
