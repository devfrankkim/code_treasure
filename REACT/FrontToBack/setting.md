### `npm i -D json-server concurrently`

- run server + react server at the same time.

```js
    "start": "react-scripts start",
    "json-server": "json-server --watch db.json --port 5000",
    "dev": "concurrently \"npm start\" \"npm run json-server\"",
```

[concurrently](https://medium.com/@joelazarz/using-concurrently-with-json-server-and-your-react-app-3d07487acc50)

### postman

- http request 관리 해준다. 굳이 db.json가서 안지워도 됨 + 웹브라우저 체크 하지 않아도 됨.
