## TRUST ISSUES with setTimeout()

- It all depends on the Call Stack
- Run JS code -> Global Execution context gets created in Call Stack  
- setTimeout Call back function registers in Web APIs -> delay time with Web APIs
- wait for the timer to expire so that the call back function can get executed
- There's no guarantee that the call back milliseconds will happen on time 
- That's why we should not block out MAIN THREAD(call stack)


```js
console.log('start')

// this gets to execute once the CALL STACAK IS EMPTY (After the global execution context)
setTimeout(function cb(){
    console.log('callback')
}, 0)

console.log('end')

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 2000){
    endDate = new Date().getTime();
}

console.log(endDate)
console.log("While expires");
```