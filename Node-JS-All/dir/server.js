// ====== Vanilla JS vs Node JS ======
// (0) Node js is a JavaScript runtime. Chrome's V& JavaScript engine.
// (1) Global Object (smaller) instead of window object (browser)
// (2) Missing some JS APIs like fetch

// console.log(global);

const os = require("os");
const path = require("path");

// Destructuring is possible
const math = require("./math1");
console.log(math.add(2, 3)); //5
console.log(math.multiply(10, 10)); // 100

const { add, subtract, multiply, divide } = require("./math1");
console.log(add(2, 3)); // 5

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

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
