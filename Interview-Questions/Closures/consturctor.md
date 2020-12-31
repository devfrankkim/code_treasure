##  Function Constructor in JavaScript

```js
 function Counter(){
    let count = 0;
    this.incrementCounter =  function (){
        count++;        
        console.log(count);
    }
    this.decrementCounter =  function (){
        count--;        
        console.log(count);
    }
}

let counter1 = new Counter();
console.log(counter1); // counter {incrementCounter: ƒ, decrementCounter: ƒ}
counter1.incrementCounter(); // 1
counter1.incrementCounter(); // 2
counter1.incrementCounter(); // 3
counter1.decrementCounter(); // 2

let counter2 = new Counter();
counter2.incrementCounter(); // 1 
counter2.incrementCounter(); // 2


```