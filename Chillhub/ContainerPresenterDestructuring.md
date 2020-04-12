# Destructuring (let - const) #example

[Reference Destructuring => Assignment without declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Assignment_without_declaration_)

```js
/*
` const { data: result } = isMovie ? await movieAPI.getDetails(id)
                                   : await tvAPI.getDetails(id) `
*/

    let result = null;
    try {
      if (isMovie) {
      // const request = await moviesApi.movieDetail(parsedId);
      // result = request.data;
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        // const request = await tvApi.showDetail(parsedId);
        // result = request.data;
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }
```

```js
let a, b;
[a, b] = [10, 20]; // 10, 20

// ({ a, b } = { a: 100, b: 200 }) // 100, 200
```
