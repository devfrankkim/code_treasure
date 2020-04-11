# Axios (encodeURIComponent => string)

movieDetail: (id) => api.get(`movie/${id}`)

https://developers.themoviedb.org/3/
append_to_response를 api에서 지원한다.
what you can get is appending video(trailer) or image(poster)

```js
movieDetail: id =>
  api.get(`movie/${id}`, {
    params: {
      append_to_response: "videos"
    }
  });
```

```js
search: term =>
  api.get("search/movie", {
    params: {
      query: encodeURIComponent(term)
    }
  });
```

space나 %! 같은 것은 URL에서 encoding을 해야한다.
encodeURIComponent는 string으로 처리하게 인코딩하고 처리해준다.
