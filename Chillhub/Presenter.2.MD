# onSubmit - onChange (Form, Input, Search, Update, Render)

### #Form# \*\* onSubmit(event.preventDefault(), use {sentData} from #Input# to Search)

### #Input# \*\* value={sendData}, onChange(Update.Event.target.value)-> \*(setState) show on the screen(updated event.target.value)

[Container]  
A. *Input*에서 글자 1) event.target.value 보이게 업데이트 해준다. 2) value를 사용하여 값을 *Form*에게 넘긴다.

[Container]  
B. *Form*은 *Input*에서 받은 value 값을 잃지 않게 해당 1) 페이지 refresh를 멈추고, 2) *Input*에서 받은 value 값을 함수에게 전달해서 데이터를 찾는다.

[Container]  
C. *Form*으로 받은 value 값으로 해당 데이터를 찾는다. 1) Loading을 시킨다. 2) 해당 데이터 value를 찾는다. 3) 해당 데이터 value를 update한다. 4) Loading을 off 시킨다. 5) 마지막으로, 업데이트된 데이터를 스크린에 보여준다.(Container=>Presenter)

[Presenter]  
D. 스크린(_Presenter_)에서 1) Loading을 먼저 시켜준다. 2) Behind the scenes(looking for data) 3) Loading을 끝낸다. 4)데이터가 있으면, 데이터를 스크린에 보여준다.

```js
1. onSubmit - <Form onSubmit={preventRefresh} />,
    A. Browser(page refresh) => event.preventDefault(),
    B. and then call the fucntion that looks for {sentdata} from Input-{Updated.event.target.value}

2. onChange - <Input onChange={Update.Event.target.value} />,
    value => event.target.value(update)
```

[SearchPresenter.js]

```js
const Container = styled.div`
  padding: 0px 20px;
`;
const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`; // onSubmit 이벤트 차단.
const Input = styled.input`
  all: unset;
  font-size: 30px;
  width: 100%;
`;

const searchPresenter = ({
  movieResults,
  tvResults,
  loading,
  searchTerm,
  handleSubmit,
  error,
  updateTerm
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      // value는 we want to control our input // we need to keep track of the
      value={searchTerm}
      // I want to get the value with JavaScript // Problem #1) typing을 하면 작동하지
      않고, Problem #2) enter누르면 browser default로 submit하면서 페이지가 refresh
      된다. 그러면 state값을 잃어버리게 된다. //Solution #1) solution update관한
      value값이 있는 onChange function을 만들어야지 typing이 가능하다. // Solution
      #2) that's why 해당 이벤트를 가로채야한다. 이건 리액트의 이벤트이기 때문에,
      리액트 혹은 자바스크립트는 나에게 이벤트(event)를 준다. 해당 이벤트(event)를
      차단해야한다. 해당 event를 가로채서 페이지를 refresh 못하게 막아야 한다. =>
      event.preventDefault(); => event.target.value 값을 받아서 value값을 업데이트(setState)를
      해줘야 한다. value 값을 업데이트를 해주지 않으면 letter하나밖에 받지 못한다.
      => ************ Answer to the loading event
      <Input
        placeholder="Search Movies or TV Shows..."
        value={searchTerm}
        onChange={updateTerm}
      ></Input>
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map(movie => (
              <span key={movie.id}>{movie.title}</span>
            ))}
          </Section>
        )}

        {tvResults && tvResults.length > 0 && (
          <Section title="TV Results">
            {tvResults.map(show => (
              <span key={show.id}>{show.name}</span>
            ))}
          </Section>
        )}
      </>
    )}
  </Container>
);
```

===========================================

[SearchContainer.js]

```js
//  Solution #2) event를 받고 해당 페이지 refresh를 막는다.
handleSubmit = event => {
  event.preventDefault(); // 해당 웹페이지 refresh되는 것을 막을 수 있다.
  const { searchTerm } = this.state;
  if (searchTerm !== "") {
    this.searchByTerm();
  }
};

// presenter한테 function을 보내고, presenter에서 받은 changed event값을 사용한다.
updateTerm = (event) => {
  console.log(event); // synthetic event. event에는 target, value을 가지고 있다.
  const {target: {value}} = event;
  console.log(target);
  console.log(value);
  // value gets only one letter!!! because I am not updating the value yet so we need to change that.
  // Solution => 1. take the value 2. change the State(setState) 3. ******** Answer to the loading event
this.setState({
  searchTerm: value
})

  };

searchByTerm = async () => {
  const { searhTerm } = this.state;
  this.setState({ loading: true });
  try {
    const {
      data: { results: movieResults }
    } = await moviesApi.search(searchTerm);
    const {
      data: { results: tvResults }
    } = await moviesApi.search(searchTerm);
     this.setState({
        movieResults,
        tvResults
      });
  } catch {
  } finally {
    this.setState({ loading: false });
  }
};

render() {
  const { movieResults,
  tvResults,
  loading,
  searchTerm,
  handleSubmit,
  error,
  updateTerm} = this.state;

  return(
    <SearchPresenter  movieResults={movieResults}
  tvResults={tvResults}
  loading={loading}
  searchTerm={searchTerm}
  handleSubmit={this.handleSubmit}
  updateTerm={this.updateTerm}
  error
  />
  )
}
```
