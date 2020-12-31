## Data Hiding & Encapsulation in JavaScript 
## Example of Data Privacy using Closures

- Hiding data inside a function 

```js
function counter(){
    var count = 0;
    function incrementCounter(){
        count++;        
    }
}
console.log(count); 
```

### Closure 

- This forms a closure and returns
- It can be only accessed through functions
- "count" variable is hidden inside the function

```js
function counter(){
    let count = 0;
    return function incrementCounter(){
        count++;        
        console.log(count);
    }
}
let counter1 = counter();

counter1() // 1
counter1() // 2
counter1() // 3

let counter2 = counter();
counter2(); // 1
counter2(); // 2
counter2(); // 3
```



