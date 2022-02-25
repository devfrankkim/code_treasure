```js
// ======== create server ========
// build a path then serve file
const server = http.createServer((req, res) => {
  console.log(`req.url -> "${req.url}"`, `req.method -->, "${req.method}"`);

  let filePath;
  if (req.url === "/" || req.url === "index.html") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    filePath = path.join(__dirname, "views", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      res.end(data); // send the data
    });
  }
});
```
