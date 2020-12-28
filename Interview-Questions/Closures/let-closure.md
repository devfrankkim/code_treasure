## let declaration

Considering "let" is a block scope, it still forms a closure.

```js
function outer(){
    
    function inner(){
        console.log(a);
    }
    let a = 1000;
    return inner; 
}
  
outer()(); // 1000

let close = outer()
close(); // 1000
```

  