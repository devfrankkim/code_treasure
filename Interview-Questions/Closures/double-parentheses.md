## Use of double parenthesis  ()() in JS

```js
function outer(){
    var a = 10;
    function inner(){
        console.log(a);
    }
    var a = 1000;
    return inner; 
}

outer()(); // 1000

var close = outer()
console.log(close); // ƒ inner(){console.log(a)}

close(); // 1000
```