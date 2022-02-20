## Start

```js
const os = require("os");
console.log(os.type()); // darwin
console.log(os.version()); // darwin + version + root
console.log(os.homedir()); // /Users/frankkim
```

- `require('./path');`
- \_\_dirname --> folder path
- \_\_filename --> (file path)
- path.dirname(\_\_filename) --> (file) folder path
- path.basename(\_\_filename) --> Pure file name
- path.extname(\_\_filename) --> extension name
- path.parse(\_\_filename) --> {root, dir, base, ext, name}

```js
console.log("__dirname -->", __dirname); // /Users/frankkim/Desktop/node-js-all
console.log("__filename -->", __filename); //  /Users/frankkim/Desktop/node-js-all/server1.js
console.log(path.dirname(__filename)); // /Users/frankkim/Desktop/node-js-all
console.log(path.basename(__filename)); //server1.js
console.log(path.extname(__filename)); // .js
console.log(path.parse(__filename));
/*
{
  root: '/',
  dir: '/Users/frank/Desktop/node-js-all',
  base: 'server1.js',
  ext: '.js',
  name: 'server'
}
*/
```

```js
// server1.js
const math = require("./math1");
console.log(math.add(2, 3)); //5

//  *******    or    *******

const { add } = require("./math1");
console.log(add(2, 3)); // 5
```

```js
// math1.js

exports.abc = () =>
//  *******    or    *******
const abc = () =>
module.exports = { abc }

//  ========== Example ==========

exports.add = (a, b) => a + b;
//  *******    or    *******
const add = (a, b) => a + b;
module.exports = { add, subtract, multiply, divide };
```

## Read and Write Files (fs - file system)

- `const fs = require("fs");`
- `const fsPromises = require("fs").promises;`
- `const path = require("path");`
- `path.join` --> path 연결
- `process.on("uncaughtException", (err) => process.exit(1);)` -- exit on uncaught errors

* Create : writeFile()
* Create + update : appendFile()
* Read : readFile()
* rename : rename()
* Delete : unlink()

**fs.appendFile() won't create directory**

- To make the directory >> use mkdir()

```js
if (!fs.existsSync(path.join(__dirname, "logs"))) {
  await fsPromises.mkdir(path.join(__dirname, "logs"));
}
await fsPromises.appendFile(
  path.join(__dirname, "logs", "eventLog.txt"),
  logItem
);
```

_Creating from_stream.txt file using ./reply.txt text._

- `fs.createReadStream("./reply.txt", { encoding: "utf8" });`
- `fs.createWriteStream("./from_stream.txt");`

```js
const fs = require("fs");
const rs = fs.createReadStream("./reply.txt", { encoding: "utf8" });
const ws = fs.createWriteStream("./from_stream.txt");
const copyNewPage = fs.createWriteStream("./copyNewPage.txt");

rs.on("data", (dataChuckie) => {
  ws.write(dataChuckie);
});

rs.pipe(copyNewPage); // more efficent
```

```js
// if the directory doesn't exist
!fs.existsSync();

// if the directory (folder) exsists
fs.existsSync();

// creatae new directory (folder)
fs.mkdir();

// Remove directory (folder)
fs.rmdir();
```
