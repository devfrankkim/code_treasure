# How to get :id from props? {match.params, history.push} String => Number

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
      history: { push }
    } = this.props;
    // console.log(id);
    // console.log(this.props);

    //I want to detect if the id is number or not.

    // typeof Number(id)
    // Number("123aa") --> NaN

    // typeof ParseInt(id)
    // parseInt("123aa") --> 123

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
