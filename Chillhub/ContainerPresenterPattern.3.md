# Client => onSubmit(handleSubmit) => searchByTerm

LOGIC:

1. 누군가가 폼에서 text를 입력하고,
2. 엔터를 누르면,
3. handleSubmit이 된다.

handleSubmit은 searchTerm이 빈칸(공백) 아닌 걸 체크하고,  
그 다음에 search function을 실행한다.

```js
state = {
  movieResults: null,
  tvResults: null,
  searchTerm: "",
  loading: false,
  error: null
};



handleSubmit = () => {
  const { searchTerm } = this.state;
  if (searchTerm !== "") {
    this.searchByTerm(searchTerm);
  }
};

searchByTerm = async () => {
  const { searchTerm } = this.state;
  this.setState({ loading: true });
  try {
    // const movieResults = await movieApi.search(searchTerm);
    // const tvResults = await tvApi.search(searchTerm);
    // console.log(movieResults, showResults);

    const {data: {result: movieResults}} = await movieApi.search(searchTerm);
    const {data: {result: tvResults}}= await tvApi.search(searchTerm);

    // console.log(movieResults, tvResults);

    this.setState({movieResults, tvResults})
  } catch {
    this.setState({ error: "Can't find the info" });
  } finally {
    this.setState({ loading: false });
  }
};


render() {
    const{ MovieResults, tvResults} = this.state;
    console.log(this.state);

    return(
        <SearchPresenter
            movieResults={movieResults}
            tvResults={tvResults}
            searchTerm={searchTerm}
            loading={loading}
            error={error}
            handleSubmit={this.handleSubmit}
        />
    )
}

```

### 순서

1. searchPresenter에서 폼을 만들고,
2. 폼 셋업하고,
3. onSubmit을 호출한다.(handleSubmit())
4. handleSubmit() calls searchByTerm()
