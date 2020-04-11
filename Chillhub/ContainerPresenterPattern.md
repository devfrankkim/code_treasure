# Container Presenter Pattern

api들을 screen에 보여줘야 한다.

[api.js]

```js
moviesApi = {
    nowPlaying:() =>
    upcoming:() =>
    popular: () =>
    movieDetail: () =>
}
```

```
for small projects
클래스 컴포넌트와, 스테이트를 사용.
컴포넌트들을 만들고, 마운트 되었을 때, api에서 데이터를 불러오고, 그 요소들을 렌더링 해준다.

for bigger projects
리액트 컴포넌트 코딩 패턴,

Container-Presenter Pattern

Container =>
Basically, Container has the data, state(상태값) and then get API stuff and do all the logic.

Presenter=>
show the data but doesn't have State(상태 값)
Presenter doesn't know what API is. Presenter has no class.
it's just a functional Component

Container is Datas
Presenter is Styles.

모든 Container, Presenter 생성한다. 라우터들을 위해서.

index.js has to be created everywhere.
=> 컨테이너를 export해야 하기 때문이다.

HomeContainer는 State(상태값을) 가진 모든 리엑트 컴포넌트가 될 것이다.
Container is React with State

state에서 error가 있을 수 있는 것을 항상 기억해야 된다.
error is string => `error: null`
```

[HomeContainer.js]

```js
import React from from "react"
import HomePresenter from "./HomePresenter"

export default class extends React.Component{
    state={
        nowPlaying:null,
        upComing:null,
        popular:null,
        error: null,
        loading: true
    }

    render(){
        const {nowPlaying, upComing, popular, error, loading} = this.state
        <HomePresenter
            nowPlaying={nowPlaying}
            upComing={upComing}
            popular={popular}
            error={error}
            loading={loading}
        />
    }
}
```
