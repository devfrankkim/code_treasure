// const { format } = require("date-fns");
// const { v4: uuidv4 } = require("uuid");

// console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));
// // 20220217        11:42:43
// console.log(uuidv4());

const logEvents = require("./logEvents");
const EventEmitter = require("events");

class Emitter extends EventEmitter {}

// initialize object
const myEmitter = new Emitter();

// add listener for the log event. And listening to the log events.
myEmitter.on("log", (message, second) => logEvents(message, second));

setTimeout(() => {
  // Emit event
  myEmitter.emit("log", "Log event emitted!", "second parameter");
}, 2000);
