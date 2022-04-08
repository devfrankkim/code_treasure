### This will set https://xxxxxxxxx.com?hello=world in the URL.

```js
// App.js
<Routes>
  <Route element={<SomeComponent />} path="some-route/*" />
</Routes>
```

```js
// SomeComponent.jsx
const [searchParams, setSearchParams] = useSearchParams({});
// This will set https://xxxxxxxxx.com?hello=world in the URL.
setSearchParams({ hello: "world" });
console.log(searchParams);

searchParams.get("hello");
```

- https://ui.dev/react-router-query-strings

```js
const queryString = "?q=ui.dev&src=typed_query&f=live";
```
