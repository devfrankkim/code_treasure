```js
const logEvents = require("./logEvents");
const EventEmitter = require("events");

// class
class MyEmitter extends EventEmitter {}
// initialize object
const myEmitter = new MyEmitter();
// add listener for the log event. And listening to the log events.
myEmitter.on("log", (message) => logEvents(message));
```
