# React Router gives Props to Routes by Default!! (match.params)

Create Two Routes

/movie/12  
/show/12

we are using :id but we also should know how to get :id (in our Component={Detail} so that we can choose which one.  
어떻게 URL에서 가져와서, movie를 검색할지, show를 검색할지 선택할 수 있게.

1. :id
2. /movie
3. /show

using the same <Route Component={Detail} />.

we will have to get the id from URL,  
To be able to search by id.

```js
<Switch>
  <Route path="/movie/:id" component={DetailContainer} />
  <Route path="/show/:id" component={DetailContainer} />
</Switch>
```

**Header - withRouter**
Header 컴포넌트는 우리의 라우터의 위치를 알고 있다 because of withRouter  
Header는 Route가 아니기 때문에 props를 못 받는다. 그래서 withRouter로 감싸는 것이다 for Props.

BUT

By default, React Router is going to give all the information(PROPS) to the Routes.

```js
<Switch>
  <Route path="/movie/:id" component={DetailContainer} />
  <Route path="/show/:id" component={DetailContainer} />
</Switch>
```

DetailContainer에서 props를 확인 할 수 있다 because of Router.
React Router gives PROPS!!! to Routes
ex)
/movie/123

[DetailContainer.js]

```js
console.log(this.props);

=> {match:{...}, location{...}, history{...}, staticContext: undefined}
```

Now,

1. We need to find out if there is "/movie" or "/show"  
   Because they both are going to same page, the same Components.

2. find out what the number is
   "/movie/1234"

Our Props has "match" and the "id" is waiting for us!!!
{match: {params: {id: "1234"}}}

'id'인 이유는 Route안에서 props를 ':id'로 넘겼기 때문이다.

```js
<Switch>
  <Route path="/movie/:id" component={DetailContainer} />
</Switch>
```

':id'를 ':potato'로 바꾸면 match.params.potato 가 된다.

```js
<Switch>
  <Route path="/movie/:potato" component={DetailContainer} />
</Switch>
```

**React Router gives you the parameters in separate place.**
