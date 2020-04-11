# componentDidMount(this.setState) - Axios

1. When the component mounts, look for the functions.

2. Set the state

```
componentDidMount(){

1) whole API request 안에다가 전체 request 할 수 있다.

}

2) 분리된 함수로 만들어서 따로 요청할 수 있다.

ex)
밖에다가 분리된 함수로,
getNowPlaying(), getUpComing(), getPopular() 함수들을 만들 수 있다.

use try - catch
```

```js
// wait for me until I finish something.
// finish is different from success. It get get error or data.
// JavaScript doesn't wait for you.
 async componentDidMount(){

    try{
        // import and wait until it gets the data.
        // const nowPlaying = await moviesApi.nowPlaying()
        //console.log(nowPlaying)

        // destructuring and changing the variable name (JavaScript Syntax)
        const {data: {result: nowPlaying}} = await moviesApi.nowPlaying()
        console.log(nowPlaying);

        // const upComing = await movies.Api.upComing();
        // console.log(upComing);


        const {data: {result: upComing}} = await movies.Api.upComing();
        console.log(upComing);

        const {data: {result: popular}} = await movies.Api.popular();
        console.log(popular);

        this.setState({
            // nowPlaying: nowPlaying
            nowPlaying,
            upComing,
            popular
        })

    } catch {
        // usually catch errors
        error: "Can't find movie's information"

    } finally{
            // show the error or show the movie
        this.setState({
            loading: false
        })
    }

}

render(){
    const{nowplaying, upComing, popular, error, loading} = this.state
    console.log(this.state);

    return(
        <HomePresenter
            nowplaying={nowplaying}
            upComing={upComing}
            popular={popular}
            error={error}
            loading={loading}
        />
    )
}

```
