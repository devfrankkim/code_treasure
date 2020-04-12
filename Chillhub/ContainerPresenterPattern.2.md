# (async componentDidMount(){ }) === (componentDidMount() = async() =>{ })

```js
state={
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
}

async componentDidMount() {
    try{
        // const topRated = await tvApi.topRated();
        // const popular = await tvApi.popular();
        // const airingToday = await tvApi.airingToday();
        // console.log(topRated, popular, airingToday);

        const {data: {results: topRated}} = await tvApi.topRated();
        const {data: {results: popular}} = await tvApi.popular();
        const {data: {results: airingToday}} = await tvApi.airingToday();

        // console.log(topRated,popular,airingToday);
        this.setState({topRated, popular, airingToday})

    } catch{
        this.setState({
            error:"Can't find the info"
        })
    } finally{
        this.setState({loading: false})
    }
}



The same as
componentDidMount() = async() => {

}
```
