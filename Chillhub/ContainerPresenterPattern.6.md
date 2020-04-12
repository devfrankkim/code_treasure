# constructor(props) & super(props) || props & this.state

URL을 가지고 와야 한다.
location.pathname
"/movie/:id"

```js
export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true
  };

  // we need to get props
  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push },
      location: { pathname }
    } = this.props;

    this.isMovie = pathname.includes("/movie/");
    // console.log(this.isMovie); // true

    const NumberId = Number(id);
    if (isNaN(NumberId)) {
      return push("/"); // go home
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
```

### OR

```js
// includes will return true or false
const path = "/movie/1234"
path.includes("/movie/");
=> true
```

예를 들면,  
만약에 다시 render하고 싶다면, this.Movie를 this.state에 둔다.

```js
export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;

    this.state = {
      result: null,
      error: null,
      loading: true
    };
  }

  // we need to get props
  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;

    this.isMovie = pathname.includes("/movie/");
    // console.log(this.isMovie); // true

    const NumberId = Number(id);
    if (isNaN(NumberId)) {
      return push("/"); // go home
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
```

### OR

```
*첫번 째로, Current Class에서는 React.Component를 상속(extends) 받아서 쓰고 있습니다.
*자바스크립트에서는 super가 parent class constructor(React.Component) 가르킵니다.
*그렇다면 Current Class에서는 parent element with props parameter를 가지고 와야지만 쓸 수 있겠네요.
*리액트팀이 Constructor 밖에서는 super()에 props를 전달하지 않고도 this.props를 쓸 수 있도록 설정을 해주었습니다.
•ClojureScript, CoffeeScript, ES6, Fable, Scala.js, TypeScript 등이 어떻게 될지 모르기 때문에 super() 설정을 유연성있게 바꿨다고 합니다.

*Constructor를 쓰시려면 super(props) 를 꼭 쓰셔야 됩니다.

**Reference**
https://reactjs.org/docs/react-component.html#constructor
https://overreacted.io/why-do-we-write-super-props/

```

```js
// true or false
this.isMovie = pathname.includes("/movie/");

이것은 전체 class에 저장이 된다.
이 방법은 렌더링 할 것이 없을 때 할 수 있다.

만약에 다시 render를 하고 싶다면, this.state에서 사용해야 한다.

componentDidMount고, 컴포넌트가 this.isMovie를 여기서 가진다.

```

```js
export default class extends React.Component {
  constructor(props) {
    super(props);

    //props를 데리고 올 수 있다.
    const {
      location: { pathname }
    } = props;

    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }
    async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;

  *****
  // this.isMovie = pathname.includes("/movie/");
  // state를 사용할 수도 있다.
    const {isMovie} = this.state;

    const NumberId = Number(id);
    if (isNaN(NumberId)) {
      return push("/"); // go home
    }
    // `const { data: result } = isMovie ? await movieAPI.getDetails(id) : await tvAPI.getDetails(id);`
    let result = null;
   try{
     if(isMovie){
       result = await movieApi.movieDetail(NumberId);
     }else{
       result = await tvApi.showDetail(NumberId)
     }
    //  console.log(result);
   }catch{
     this.setState({error: "Can't find anything"})
   }finally{
     this.setState({loading: false, result})
   }
  }

  render() {
    const { result, error, loading } = this.state;
    console.log(this.state);
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }

}
```

`this.isMovie = pathname.includes("/movie/");`

isMovie를 그냥 state에 넣을 수 있다.  
create a state immediately with isMovie included
props => state
