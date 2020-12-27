## What is Closure?

- A function along with a reference to its outer environment together FORMS a closure 
- A combination of a function and its lexical scope bundle together FORMS a closure

### Can you explain more about it?

- Each funciton in JavaScript has an access to the outer lexical environment (variables & functions) 
- Even if when this function is executed in some other scopes, not in the original scope, it still REMEMBERS its outer lexical environment where original codes existed.

### Give me some examples

```js
function outer(){
    var a = 10;
    function inner(){
    // this(inner) function forms a closure
    // this(inner) function has an access to its outer environment 
    // inner function has an access to "a" variable

    // this(inner) function + its lexical outer environment => "Closure"
        console.log(a);
    }
    return inner; // the major part of "Closure"
}

outer()(); // 10
    // if this function returns outside the scope, 
    // and try to access the variables somewhere else, it still REMEMBERS what the value of "variable" was.

    // THIS is "Closure"
```
