## What is Event Loop & Callback Queue(task queue)?

***It consistently monitors the Call Stack & Callback Queue***
***If the Event Loop sees that the Call Stack is empty, and something in Callback Queue, Event Loop will push the thing to the Call Stack***

- JavaScript is synchronous - single threaded language
- This means it has one call stack and one memory heap. 
- As expected, it executes code in order and must finish executing a piece code before moving onto the next.
- Whatever comes inside Call Stack, it executes immediately 

## Call stack is inside JavaScript Engine

JavaScript Engine needs somee super power to connect to timer, server, URL, and etc

## SUPER POWER FROM BROWSERS (WEB APIs)

***WEB APIs***

* setTimeout() -> it's not part of JavaScript 
* DOM APIs -> document.getElementById, document...
* Fetch() -> fetching datas from other servers
* localStorage 
* console -> console logging part
* Location -> https://www
 
***Browsers give super power access to the JavaScript Engine through Global Object(WINDOW)***

- The browser wraps up the super power of APIs into the ---> Global Object(window)
- Global Object(window) ---> give the access of the window to call stack or the JavaScript Engine
- Now you can use window.setTimeout or window..... to access the Super Power
   

### Examples of Web API - console & setTimeout

```js
console.log("start")
setTimeout(function cb(){
    console.log('call back registers in Web API environment');
}, 1000)
console.log("end")
```

**Web APIs**
- console -> console logging in the browser
- setTimeout(call back function) -> register in web api environment
- When the time expires for the call back funciton, 
- it goes to call back Queue
- Event Loop will push the data to Call Stack when it's empty.
- Being Executed
  

### Examples of Web API - Event Listener given by browsers to JS Engine through window object

- First of all, The Global Execution Context gets created and push it to the Call Stack
- `document.` will automatically call DOM APIs,  
  
**Web APIs**
- DOM API

```js
console.log("start")

document.getElementById("btn").addEventListener("click", function cb(){
    console.log('Call Back');
})

console.log("end")
```
  
```
Call Stack: GEC
Web APIs: Registering a callback with Event -> cb() with ('click')
Call Stack: Empty 
```

- addEventListener registers the callback on an event
- If we do not explicitly remove the event listeners in the Web API Environment or close the browsers, the registered call back will stay in the web APIs
- The Web APIs will hope that SOMEDAY the users will invoke the Events that are left in the Web API environment


### WHY do we need the Callback Queue(Task Queue)?
- It's making sure the callbacks are in order.
- It works one thing a time.


### How does fetch work? ---> it doesn't go to Callback Queue after getting the requested data

- fetch goes and requests API call 
- fetch returns promise
- We have to pass the callback function which will be executed once the promise all
- Promise all means when we get the data, we just execute the callback function 

------> It will go to Micro Task Queue ---> it has higher priority than callback Queue


## Callback Queue <<<< Microtask Queue (higher priority)

***Microtask Queue***

- All the callback functions that come through Promises
- Mutation Observer
- ex) fetch

### Mutation Observer
- Mutation Observer --> keeps checking if there's mutation in DOM Tree or not
- If there's mutation in DOM Tree, It can execute some callback functions
- 콜백 함수는 각 DOM 변경시 마다 호출된다.

### Starvation of Callback Queue

- If there are so many Microtask Queue lists, callback queue(task queue) starves