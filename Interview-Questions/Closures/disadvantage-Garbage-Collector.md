## Disadvantages of Closures

- over consumption of memory 
- everytime a closure gets formed, it consumes a lot of memory 
- Sometimes, those closure of variables are not garbage collected
- it is kind of accumulating a lot of memory if we create a lot of closures in the program
- if not handled property, it can also lead to memory leaks, it can also freeze the browsers

## What is garbage collector? and what does it do?
 - it's a program in the browser of the JS engine that freezes up the unutilized memory 
 - JS is higher level of programming language 
 - whenever there's unused variables, it just takes out of the memory - freeze up the memory if they are no longer needed.


## so how are the garbage collector and closures related to each other?

```js
function a (){
    var x = 0;
    // "b" function forms a closure with variable "x"
    return function b(){

        console.log(x)
    }
}
let y = a();
y();
// y: {console.log(x)}
// once the function is executed, the variable should go away(garbage collector) - No longer needed
// However, if it forms a closure, the memory can't be free 
// so if it keeps forming more closures -> more memory space is accumulating 

// TIP: modern browser, ex) chrome(V8), they have smart garbage mechanism
// if the variables are not reachable, they are smart enough to collect the garbage variables
```



