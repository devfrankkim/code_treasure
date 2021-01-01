## so what do you mean by they are smart enough to collect the garbage variables by V8 JS Engine in Chrome? 

## Example of Smart Garbage collection by V8 JS Engine in Chrome

- if the variables are not reachable, they are smartly collecting garbage variables 

```js
function a (){
    var x = 0, z = 10; // 'z' won't be used anywhere, 'z' won't be in the memory any more.
    // "b" function forms a closure with variable "x"
    return function b(){
        console.log(x)
    }
}
let y = a();
y();
```