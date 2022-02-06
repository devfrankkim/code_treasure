### Router --> (Link + Route) -> Wrapper Component --> URL 주소에 맡는 페이지 렌더링. 적당한 페이지 컴포넌트를 사용자에게 보내줌.

### Link --> a태그랑 비슷함. 하지만, SPA 리로딩 하는걸 방지해준다. (링크만 옮겨줌 & to로 주소 설정을 해줌) `<NavLink to="/topics">Topics</NavLink>`

### Route --> 특별한 URL 주소를 보고, 컴포넌트를 화면에 뿌려준다. (path가 필요함.) `<Route path="/topics/:topic_id"/ >`

### NavLink --> Link + styling(class:active)

### Switch --> 똑같은 컴포넌트는 첫번째 컴포넌트만 허락하고 나머지를 버린다. ex) "/", "/blahblahwaste", "/blahwaste" --> "/"이게 들어가기 때문.

- Switch를 사용하지 않으면, 모든 선택지가 출력된다. ex) "/", "/blahblah출력", "/blah출력" --> "/"가 들어가기 때문.
- "/" 를 방지하기 위해, 맨 마지막에 사용하거나. exact를 사용한다. 결국 선택지는 하나가 되는 것.

## Nested Routing

```js
let contents = [
  { id: 1, title: "HTML", description: "HTML is..." },
  { id: 1, title: "JS", description: "JS is..." },
  { id: 1, title: "React", description: "React is..." },
];

function Topic(){
    let params = useParams();
    let topic_id = params.topic_id;
    let selected_topic = {
        title:'Sorry',
        description:'Not Found'
    }
    for(let i=0; i<contents.length; i++){
        if(contents[i].id === Number(topic_id)){
            selected_topic = contents[i];
            break;
        }
    }
    return (
        <div>
            <h3>{selected_topic.title}</h3>
            {selected_topic.description}
        </div>
    );
}


function Topics() {
    let lis = [];

    for (let i=0; i<contents.length; i++){
        lis.push(
          <li>
            <NavLink to={`/topics/${contents[i].id}`}>
                {contents[i].title}
            </NavLink>
          </li>
        )
    }

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <Route path="/topics/:topic_id">
        <Topic/>
      </Route>
    </div>

    <Switch>
        <Route path="/topics/1">
            HTML is...
        </Route>
        <Route path="/topics/2">
            JS is...
        </Route>
        <Route path="/topics/3">
             React is...
        </Route>
    </Switch>
  );
}
```

```js
// Router

function App() {
  return (
    <div>
      <h1>React Router DOM example</h1>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topics</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/topics">
          <Topics></Topics>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/">Not found</Route>
      </Switch>
    </div>
  );
}
```
