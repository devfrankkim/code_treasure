[https://mesonia.tistory.com/144]
[https://www.daleseo.com/react-router-basic/]

# 라 우 터 배 우 기

- 라우터 배워야 한다.
- 라우터란? 오늘 라우터 확실히 알고 넘어가자. v5 & v6 차이점? 왜 사용하는지도 알자.

- 라우터를 왜 사용하나?
- 다른 대안방법은 있을까?
- 그러면 문법은 어떻게 되는지?
- 로직은 어떻게 되는지?
- 프로젝트에서는 어떻게 사용할 수 있는지.

```
SPA ( Single Page Application )
한개의 페이지로 이루어진 애플리케이션을 뜻한다.

기존에는 사용자가 다른 페이지로 이동할 때마다 새로운 html을 받아오고
페이지를 로딩할때마다 서버에서 리소스를 전달받아 해석한 뒤 화면에 보여주는 식으로 동작한다.
이때마다 트래픽이 많이 발생하고 사용자가 몰리면 서버측에 높은 부하가 쉽게 걸릴 수도 있다.

그래서 리액트 같은 라이브러리 혹은 프레임워크를 사용하여 뷰 렌더링을
사용자의 브라우저가 담당하도록 하고,
우선 브라우저에 불러와서 실행시킨 후 필요한 부분만 자바스크립트를 이용하여 업데이트해준다.
```

================================================
○ SPA의 단점

앱의 규모가 커지면 페이지 로딩 시 실제로 방문하지 않을 수도 있는 페이지의 스크립트도 함께 불러오기 때문에
자바스크립트 파일이 너무 커진다는 것.
하지만 이 부분은 코드 스플리팅을 사용해 트래픽과 로딩속도를 개선할 수 있다.
================================================

## 라우팅 (연결고리)

- 다른 주소에 다른 화면을 보여주는 것
- 리액트 라이브러리 자체에 이 기능이 내장되어 있지는 않아서 **라이브러리를 사용하여 구현해야 한다.**
- 리액트 라우팅 라이브러리는 리액트라우터(react-router), 리치라우터(reach-router), Next.js등이 있다
- `yarn add react-route `

**_프로젝트에 리액트 라우터를 적용할 때는 리액트라우터의 내장되어있는 BrowserRouter라는 컴포넌트를 사용한다._**

```js
import { BrowserRouter } from "react-router-dom";
// 리액트 라우터에 내장되어 있음. (문법)
```

### 라우트는 -> 특정주소에 연결해주기 -> 컴포넌트 연결해주기 (연결고리)

- ○ Route컴포넌트
  **_ Route컴포넌트로 `특정 주소에 컴포넌트 연결하기`_**
- Route라는 컴포넌트를 이용하여 -> 어떤 경로에 -> 어떤 컴포넌트를 보여줄지 아래와 같이 사용한다.

```js
<Route path="주소"(ex. "/home") component={보여 줄 컴포넌트}(ex. {Home})/>
```

- '/' 경로

이때 경로에 '/'만 설정할 경우 /가 들어가는 모든 경로에 해당 컴포넌트에 함께 뜨기 때문에
'/'경로만 설정한다면 exact라는 props를 true로 설정해주어야 한다.

<Route path="/" component={Main} exact/> //true생략가능 - 디폴트 값.
<Route path="/home" component={Home}/>

- Route하나에 여러개의 path 설정하기

여러개의 경로가 하나의 컴포넌트를 나타내도록 아래와 같이 표현할수 있다
<Route path="/" component={Main} exact={true}/>
<Route path="/home" component={Home}/>
<Route path="/hello" component={Home}/>

- 하지만 중복되는 컴포넌트를 불러올때 두번, 세번씩 사용하는 대신
  path props를 배열로 설정해주면 한줄로도 표현할 수 있다.
  <Route path="/" component={Main} exact={true}/>
  <Route path={["/home", "/hello"]} component={Home}/>

### ○ Link컴포넌트 (페이지 주소만 변경. 페이지 전환해도 상태 유지해줌.)

- :: Link컴포넌트로 다른 주소로 이동하기 ::
- Link컴포넌트는 클릭하면 다른 주소로 이동시켜주는 컴포넌트인데
- 일반적으로 사용하는 a태그와는 조금 다르기때문에 리액트라우터를 사용할때는 a태그를 직접 사용하면 안된다!

* Link컴포넌트 자체는 a태그로 이루어져 있지만 --> 페이지 전환을 방지하는 기능이 내장되어 있다.
* a태그는 페이지를 전환하는 과정에서 --> 페이지를 새로 불러오기 때문에 --> 기존 상태들을 전부 날려버리고 처음부터 렌더링을 하게 된다.
* 하지만 Link컴포넌트를 사용하면 ---> 페이지를 전환해도 상태를 유지하고 ---> HTML5 History API를 사용해 --> 페이지의 주소만 변경해준다.

### ○ NavLink컴포넌트 (:: 경로에 따라 특정 스타일 혹은 클래스를 적용하기)

- NavLink는 Link와 같이 클릭하면 --> 다른 주소로 이동시켜주는 역할을 하는데
- Link와 달리 경로가 일치할 경우 --> 특정 스타일이나 클래스를 적용하여 스타일을 줄 수 있다.

```js
// activeStyle
<ul>
  <li>
    <NavLink
      to="/profiles/frank"
      activeStyle={{ background: "black", color: "white" }}
    >
      frank
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/profiles/kim"
      activeStyle={{ background: "black", color: "white" }}
    >
      kim
    </NavLink>
  </li>
</ul>
```

```js
// activeClassName
<ul>
  <li>
    <NavLink to="/profiles/frank" activeClassName="active">
      merorii
    </NavLink>
  </li>
  <li>
    <NavLink to="/profiles/kim" activeClassName="active">
      gildong
    </NavLink>
  </li>
</ul>
```

### ○ Switch (:: 여러 Route 중 하나를 렌더링하기)

- 스위치는, 일치하는, 단 하나만을, 렌더링 시켜준다.
- 스위치는 Route에(연결고리에) path를 지정하지 않으면, 모든 상황에 렌더링이 된다.
- 모든 상황에 렌더링이 될때,아무것도 일치 하지 않으면 (연결고리) --> Not Found 페이지 구현 가능.
- **path 를 따로 정의하지 않으면 모든 상황에 렌더링됨**

* Switch 는 여러 Route 들을 감싸서 --> 그 중 규칙이 일치하는 라우트 --> 단 하나만을 렌더링시켜준다.
* Switch를 사용하여 Route에 path를 지정하지 않으면 --> 모든 상황에 렌더링 되는데
  --> 이를 이용하여 아무것도 일치하지 않았을때 보여줄 --> Not Found 페이지를 구현 할 수 있다.

```js
<Switch>
  {// "/" 만 설정하는 루트 연결고리 --> exact={true}}
  <Route path="/" component={Home} exact={true} />
  <Route path={["info", "/about"]} component={About} />
  <Route path="/profile/:username" component={Profile} />
  <Route path="/profiles" component={Profiles} />
  <Route path="/history" component={HistorySample} />
  {/*path 를 따로 정의하지 않으면 모든 상황에 렌더링됨*/}
  <Route
    render={({ location }) => (
      <div>
        <h2>존재하지 않는 페이지입니다.</h2>
        <p>{location.pathname}</p>
      </div>
    )}
  />
</Switch>
```

### URL파라미터와 쿼리

페이지 주소를 정의할 때 가끔 유동적인 값을 전달해야하는 경우가 있다.

이 경우 파라미터와 쿼리로 나눌 수 있다.

**_· 파라미터 예시 : /profiles/merorii_**

**_· 쿼리 예시 : /about?details=true_**

파라미터와 쿼리 두 가지 중 무조건 이 상황엔 이거!라고 정해진 규칙은 없다.

- 다만 일반적으로 파라미터는 특정 아이디 혹인 이름을 사용하여 조회할 때 사용하고,
- 쿼리는 우리가 어떤 키워들르 검색하거나 페이지에 필요한 옵션을 전달할 때 사용한다.

### ○ URL 파라미터

- URL 파라미터를 사용할 떄는 -->
  라우트로(연결고리) 사용되는 컴포넌트에서 받아오는 -->
  match라는 객체안의 params값을 참조한다.
- match객체 안에는 현재 컴포넌트가 어떤 경로 규칙에 의해 보이는지에 대한 정보가 들어있다.

```js
const { username } = match.params;
```

- URL파라미터를 사용할 때 라우트에 path는 아래와 같이 /profile/:username으로 넣어주면 된다.

```js
<Route path="/profile/:username" component={Profile} />
```

- 이렇게 설정하면 match.params.username을 통해 username을 조회할 수 있다!

### ○ URL 쿼리 (location 객체)

- 쿼리는 location객체에 들어있는 search값에서 조회할 수 있다.
- location 안에 들어가면, search 키 값에: 쿼리가 들어가 있다.
  **route > component > props.location > search > query**

```js
{
    "pathname": "/about",
    "search": "?detail=true",
    "hash": ""
}
```

- location객체의 search값중 특정 값을 읽어오기 위해서는
  --> 이 문자열을 `객체 형태`로 변환해주어야 하는데, 이때 qs라는 라이브러리를 사용한다.
  `yarn add qs`

```js
const query = qs.parse(location.search, {
  ignoreQueryPrefix: true, //이 설정을 통해 문자열 맨 앞의 ?를 생략
});

const showDetail = query.detail === "true"; //쿼리 파싱 결과 값은 문자열
```

- 위 코드에도 적어두었지만, 쿼리를 객체로 파싱하는 과정에서 (`qs.parse`)
  -> 결과 값은 언제나
  -> 문자열이나 숫자나 boolean값이 들어가더라도
  -> `문자열 형태로 받아오기 때문에`
  -> detail === '1'과 같은 방식으로 비교해야한다.

### history 객체 (라우터에 직접 접근)

- ex. 뒤로가기, 홈으로 이동, 특정 경로로 이동, 이탈 방지 등..

Route > component > props.match, props.location, props.history

- 라우트로 사용된 컴포넌트에게 match, location 과 함께 전달되는 props
- 이 객체를 통하여, 우리가 컴포넌트 내에 구현하는 메소드에서 `라우터에 직접 접근을 할 수 있다`

```js
history.goBack(); // 뒤로가기, 한단계전으로 이동.
history.push("/경로"); // 특정 경로로 이동
history.push("/"); // 홈으로 이동
history.block(); // 이탈 방지.
// useEffect를 함께 사용하여 .block을 걸어주면 버튼을 눌러도 페이지가 이동되지 않는다.
history.block("컨펌 창 이후, 페이지 이동 가능하다."); // 단, block안에 문구를 적어주면 confirm창이 떠 확인 후 페이지를 이동할 수 있다.

history.goBack(); // 의 경우 .block이 먹히지 않는 듯 하다!
```

```js
// 예시) HistorySample.js
import React, { useEffect } from "react";

const HistorySample = ({ history }) => {
  const goBack = () => {
    history.goBack();
  };
  const goHome = () => {
    history.push("/");
  };
  useEffect(() => {
    console.log(history);
    const unblock = history.block("이동하시겠습니까?");
    return () => {
      unblock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
};

export default HistorySample;
// App.js
// * 라우터로 사용하여 props를 전달받아 사용되기 때문에 App.js에서 렌더링할때 Router로 렌더링을 해주어야한다!

<Route path="/history" component={HistorySample} />;
```

### withRouter HoC

- withRouter HoC는 라우트 컴포넌트가 아닌 곳에서 match / location / history를 사용해야 할 때 사용한다.

```js
// WithRouterSample.js
import React from 'react';
import { withRouter } from 'react-router-dom';
const WithRouterSample = ({ location, match, history }) => {
  return (
      ....
  );
};

export default withRouter(WithRouterSample);

// App.js

// 위 history만 사용하던 예제와는 달리 그냥 컴포넌트만 렌더링해도된다!
<WithRouterSample />
// 단, 자신의 부모 컴포넌트 기준의 match 값이 전달되어
// match안에 있는 params에는 아무것도 찍히지 않는다.

{
"path": "/profiles",
"url": "profiles",
"isExact":false,
"params": {}
}
```

### export 방식.

```js
import React from "react";
import TodoTemplate from "./components/TodoTemplate";
import { TodoProvider } from "./TodoContext";
```

- 이유는 export 방식의 차이이다

```js
export default TodoTemplate;
export TodoContext
```

**default를 쓰면 { } 필요없다.**

### SPA (URL) [https://jae04099.tistory.com/entry/React-React-Router-%EA%B8%B0%EC%B4%88#Route]

```
Single Page Application에 왜 url을 쓰나요?

Url을 넣는다는 것 자체가 싱글페이지가 아니지 않나요?

: Url을 사용하면 하나의 페이지 안에서도 필요한 항목을 사용자가 북마크 처리 하거나, 사용중에 뒤로가기를 눌렀을 때 그 전 url로 이동할 수 있게 해 줍니다. 그렇지 않고 하나의 url을 이용한다면 기록도, 뒤로가기도 할 수 없는 불편한 상황이 오겠죠?
```

`BrowserRouter은 SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어준다.`

```js
function App() {
  return (
    <div>
      <h1>React Router Dom example</h1>
      <ul>
        <li>Home</li>
        <li>Topics</li>
        <li>Contact</li>
      </ul>
      <Home />
      <Topics />
      <Contact />
    </div>
  );
}
function App() {
  return (
    <div>
      <h1>React Router Dom example</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/topics">Topics</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/topics">
        <Topics />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </div>
  );
}
```

- Route가 url 주소 이름을 커스터마이징 할 수 있게 한다.

- 사용법은 아주 간단하게 라우트 하고 싶은 컴포넌트를 Route 컴포넌트로 감싸주면 된다.
  `import {BrowserRouter, Route} from 'react-router-dom'`

## Switch

- switch 컴포넌트는 라우트를 직렬적으로 변형시킨다.

```js
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App(){
...

      <Switch>
      	<Route path="/"><Home/></Route>
      	<Route path="/topics"><Topics/></Route>
      	<Route path="/contact"><Contact/></Route>
      </Switch>
      ...

}
```

- 위에서부터 아래로 내려오면서 첫번째 path가 a 라면 이후에 오는 a path는 무시당하는 것이다.
- 때문에, 이를 이용하면 /인 Home에 의해 다음의 것들은 무시 돼, Home만 나오게 될 것이다.
- 이를 해결하기 위해서는 Home에 exact를 붙이거나 Home 라인을 Contact 아래로 내리면 된다.

## Link

- Link 컴포넌트는 a태그의 속성인 페이지 새로고침을 막는다.
- 여태까지는 a링크의 새로고침 속성 때문에 굳이 SPA가 아니라도 충분히 구현할 수 있는 기능이었다.

```js
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>React Router Dom example</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}
```

# Route 컴포넌트

`<Route path="/about" component={About} />`

- 예를 들어, 위의 코드는 현재 주소창의 경로가 /about일 경우 About라는 컴포넌트를 보여줍니다. 일반적으로 현재 주소창의 URL 경로에 따라 특정 컨텐트를 보여주거나 숨기기 위해서 사용될 수 있습니다.

# Router 컴포넌트

```
<Router> 컴포넌트는 위에 나온
<Route>와 <Link> 컴포넌트가
함께 유기적으로 동작하도록 묶어주는데 사용합니다.
다시 말해, <Route>와 <Link> 컴포넌트는
DOM 트리 상에서 항상
<Router>를 공통 상위 컴포넌트로 가져야합니다.
```

```js
<Router>
  ...
  <Link />
  <Link />
  ...
  <Route />
  <Route />
  ...
</Router>
```

```js
import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/users">
          <button>Users</button>
        </Link>
      </header>
      <hr />
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users" component={NotFound} />
      </main>
    </Router>
  );
}
```

```
Link 컴포넌트
HTML의 <a> 태그와 유사한 기능을 하는 컴포넌트라고 생각하시면 이해가 쉽습니다. <a> 태그는 href 속성을 통해 이동할 경로를 지정하는 반면에 <Link> 컴포넌트는 to prop을 통해서 이동할 경로를 지정해줍니다.
```

`<Link to="/about">About</Link>`

- 예를 들어, 위의 코드는 브라우저에서 클릭이 가능한 About으로 랜더링되고, About를 클릭하면 주소창의 경로가 <도메인 네임>/about으로 갱신됩니다. 일반적으로 화면 상단이나 좌측에 위치한 네비게이션 바를 구현할 때 주로 사용하게되는 컴포넌트입니다.

- <Route> 컴포넌트는 현재 주소창의 경로와 매치될 경우 보여줄 컴포넌트를 지정하는데 사용됩니다. path prop을 통해서 매치시킬 경로를 지정하고 component prop을 통해서 매치되었을 때 보여줄 컴포넌트를 할당합니다.

`<Route path="/about" component={About} />`

- 예를 들어, 위의 코드는 현재 주소창의 경로가 /about일 경우 About라는 컴포넌트를 보여줍니다. 일반적으로 현재 주소창의 URL 경로에 따라 특정 컨텐트를 보여주거나 숨기기 위해서 사용될 수 있습니다.

==========

```
Link 링크만 옮겨줌. <a>와 유사함.
컴포넌트(페이지) 따로 볼 수 있게 또 UI에서 넘겨줘야함.

Link 링크 페이만 옮겨줌
Route 해당 페이지 path를 통해, 컴포넌트를 화면에 뿌려줌.

Router: Link와 Route의 부모 컨테이너.
```

### [보너스] 404 페이지 처리

- SPA를 개발할 때도 많은 경우, 브라우저에 잘못된 경로가 입력되었을 때, 특정한 404 페이지를 보여줘야야 합니다.
- 이럴 경우, React Router에서 제공하는 또 다른 컴포넌트인 <Switch>로 모든 <Route> 컴포넌트로 묶어줘야 합니다.
- <Switch> 컴포넌트를 사용하면 그 하위에 있는 <Route> 컴포넌트 중에 매치되는 제일 첫번째 컴포넌트만 보여주고, 그 이후에 나오는 Route 컴포넌트는 매치되더라도 무시됩니다
- (따라서 <Route> 컴포넌트의 순서가 중요해지겠지요?)
- 그 다음에 path prop이 없는 <Route> 컴포넌트를 하나 추가해주면, 이 <Route>는 모든 경로에 매치가 가능해지고, 여기에 404 컴포넌트를 할당해줄 수 있습니다.
- 그러면, 자연스럽게 위에 나온 <Route> 중에 매치되는 것이 없었을 경우, 제일 아래까지 내려올 것이고, 이 마지막 <Route> 컴포넌트가 매치되어 404 페이지가 보여질 것입니다.

```js
<main>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
</main>
```

```
react-router를 사용하면 싱글 페이지 애플리케이션과 같이 페이지 깜박임이 없으면서도 주소를 가질 수 있게 됩니다. 제 홈페이지의 예를 보면 알 수 있습니다. 일반 홈페이지는 페이지를 넘길 때 페이지가 깜박이면서 다음으로 넘어가지만, 제 홈페이지는 레이아웃은 고정되어 있고 내용만 바뀝니다. 주소도 그에 따라 바뀌고요. 이것을 가능케 하는 것이 react-router입니다.
```
