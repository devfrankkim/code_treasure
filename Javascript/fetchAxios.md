# Fetch vs Axios

_The first step in using Axios is installing Axios._
`npm install axios`
or
`https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.3/axios.min.js`

[fetch vs axios](https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5)

```js
// Fetch
const url = "https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF";
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));

// Axios
const url = "https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF";
axios.get(url).then(response => console.log(response));
```

### fetch doesn't handle errors well. it still loggs response => check the blog I referenced

### So by using axios you can cut out the middle step of passing the results of the http request to the .json() method. Axios just returns the data object you would expect.

### The .fetch() method is a great step in the right direction of getting http requests native in ES6, but just know that if you use it there are a couple of gotchas that might be better handled by third-party libraries like Axios.
