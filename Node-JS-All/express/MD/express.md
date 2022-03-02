## Express

- Define the route - http method
- any get request comes in, just look for roote "/" -> index page
- get 메소드가 들어오면, 클라이언트에게 reponse를 내보내준다. ("hello world")
- 변수로도 내보낼수 있고, 파일도 내보낼 수 있다. res.sendFile();
- how to send files (specific way)
- put in path "./views/index.html", {root:\_\_dirname}

- Not intercepting the router. -> only shows exact path
- 리액트에서 쓰는 exact 안써도, express 알아서 "/"를 구분해준다.
- express 도 regular expression을 사용하여 라우팅에서 여러가지 편하게 해준다.

- MVC: 사용자 -> 액션 취하면 -> 컨트롤러가 일을 시작해 -> 모델로 가는 라우팅을 설정해줘 -> (우리는 여기서 server에 라우팅 config 설정 해줘야한다.)

```js
// ============ sendfile 두가지 방법 ============
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname }); // (1) 첫번째 방법.
  res.sendFile(path.join(__dirname, "views", "index.html")); // (2) 두번째 방법.
});
```

```js
// ============ path 라우팅 ============
app.get("/new-page.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});
```

- http://localhost:3500/index ---> Cannot GET /index
- express automatically sets the correct status code and content type

- HTML optional `(.html)?` **(.html)?**
- http://localhost:3500/index **works**

```js
// ============ HTML optional ============
app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
```

```js
// ============ redirect ============
app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html");
  // 301 -> permanently moved to the new directing page.
  // 302 (by default) will not necessarily get the search engine to change as permannet redirect
});
```

```js
// ============ Router handlers -> can chain those -> -> next() ============
app.get(
  "/hello(.html)?",
  (req, res, next) => {
    console.log("attempted to load hello.html");
    next(); // move on to the next handlers
  },
  (req, res) => {
    res.send("Hello World!");
  }
);
/*
    (req, res) => {
    res.sendFile(path.join(__dirname, "views", "new-page.html"));
    }
*/
```

- 위치가 상당히 중요하다.
- route 핸들러가 ("/\*") 아래 있으면, 라우트 핸들러는 무용지물.
- `app.get("/*", (req, res) => { })`

```js
// ============ select all ============
app.get("/*", (req, res) => {
  // res.sendFile(path.join(__dirname, "views", "404.html")); --> this wont' just send 404 code but 200 because it can detect the file.
  res.status(404).sendFile(path.join(__dirname, "views", "404.html")); // solution
});
```

```js
// ============ chaining route handlers -> next() ============
// 라우트 핸들러는 -> 미들웨어와 비슷한 일을 한다.
const one = (req, res, next) => {
  console.log("one");
  next();
};

const two = (req, res, next) => {
  console.log("two");
  next();
};

const three = (req, res) => {
  console.log("three");
  res.send("Finished!");
};
app.get("/chain(.html)?", [one, two, three]);
```
