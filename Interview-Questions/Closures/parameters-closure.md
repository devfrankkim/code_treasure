## Paramters - Closure

Are function parameters closed over?

This works the same way
```js
function outer(b){
    function inner(){
        console.log(a); // 10 
        console.log(b); // "Hello Frank"
    }
    let a = 1000;
    return inner; 
}

outer()(); // 1000

let close = outer("Hello Frank")
close(); // 1000
```

`Before`
1. Local ->  a: undefined | b: "Hello Frank" | f inner() | this: Window
2. Global ->  close | f outer(b) -> Arguments(1) 0: "Hello Frank" , Script {close: undefined}     

`After the function`
1. Local -> a: 1000 | f inner(): Closure (outer) {b: "Hello Frank", a: 1000} | Script {close: undefined}
2. close() -> 0: Closure (outer) {b: "Hello Frank", a: 1000} | Script {close: ƒ}
3. Global -> ƒ outer(b) -> 0: Script {close: ƒ} 
   