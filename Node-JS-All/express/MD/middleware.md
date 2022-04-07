## What is middleware?

- "Anything between the request and the response."
- so route handlers we created -> middleware too.
- What is Middleware? It is those methods/functions/operations that are called BETWEEN processing the Request and sending the Response in your application method.

```js
(req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
};
```

3 가지 방법이 있다.

1. built in middleware
2. custom middleware --> we create them.
3. middleware from third parties

what is middleware for?

- It's for handling url encoded data. in other words, form data so when that comes in, in the URL, then you can pull the data out as a paramter.
- In order to get the data when the form is sumbmitted.

`npm i cors`

- "Access to fetch at 'http://localhost:3500/' from origin 'https://www.google.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled."

==================================

## app.use() vs app.all()

- app.use() is being used more likely for middleware. `app.use('/*')`
- app.all() is being used for routing. It will apply to all http methods. It accepts regex. `app.all('*')` -> at the very end of the page.

- app.use() - middleware
- app.all() - routing (regex) -> apply to "all HTTP methods at once"

## What are express.json() and express.urlencoded()?

https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded

## What is express.jsoin() and express.urlencoded()

- When talking about express.json() and express.urlencoded() think specifically about POST requests (i.e. the .post request object) and PUT Requests (i.e. the .put request object)
- You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests.
- You NEED express.json() and express.urlencoded() for `POST and PUT` requests, because in both `these requests` `you are sending data` (in the form of some data object) `to the server` and `you are asking the server` to `accept or store` that `data (object)`, `which is enclosed in the body (i.e. req.body)` of that (POST or PUT) Request

- `Express provides you with middleware to deal with the (incoming) data (object) in the body of the request.`

1. `express.json()` is a method inbuilt in express to `recognize the incoming Request Object as a JSON Object`. This method is called as a middleware in your application using the code: app.use(express.json());

2. `express.urlencoded()` is a method inbuilt in express to recognize the `incoming Request Object as strings or arrays.` This method is called as a middleware in your application using the code: app.use(express.urlencoded());

- ALTERNATIVELY, I recommend using body-parser (it is an NPM package) to do the same thing. It is developed by the same peeps who built express and is designed to work with express. body-parser used to be part of express. Think of body-parser specifically for POST Requests (i.e. the .post request object) and/or PUT Requests (i.e. the .put request object).

```js
// create custom middleware logger
// (1) what request method
// (2) req.headers.origin ---> where the request is coming from. (what website sent it to us)
// (3) what url was requested.
// (4) what file to create or write to
app.use(logger);
```

```js
// built-in middleware to handle urlencoded data
// in other words,
// form data:
// 'content-type : application/x-www-form-urlencoded'

// app.use() is what we often use to apply middleware to all routes that are coming in.
// this works like waterfall so this is above any other code, others will be applied automatically
// 위에서 아래로 -> 다 적용됨.
app.use(express.urlencoded({ extended: false }));
```

```js
// built-in middleware for json
// if json data is submitted,
// we need to be able to get those parameters or that data out of submission.
app.use(express.json());
```

```js
// serve static files -> files should be available to the public ex) css folder
// express will automatically route those files there to /public
// this is applied before other routes.
// it will search the '/public' directory for the request before it moves to next routes.

// app.use("/", express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/public")));

// subdir css not working -> solution
app.use("/subdir", express.static(path.join(__dirname, "/public")));
```

```js
// Router handlers -> can chain those -> next()
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
```

```js
// ==========================================================
/*
    // ============ ^ begin, $ end,  | or ============
    app.get("^/$|/index(.html)?", (req, res) => {
      const a = "love";
      //   res.send(a);
      res.sendFile(path.join(__dirname, "views", "index.html"));
    });

    // ============ path ============
    app.get("/new-page(.html)?", (req, res) => {
      res.sendFile(path.join(__dirname, "views", "new-page.html"));
    });

    // ============ redirect ============
    app.get("/old-page(.html)?", (req, res) => {
      res.redirect(301, "/new-page.html");
    });


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

*/
```

```js

```

```js

```
