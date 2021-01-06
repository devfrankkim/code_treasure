## What is First Class Function?

- We can even pass functions inside other functions as arguments
- Functions are treated as values
- The ability to use functions as values
- The ability to pass functions as arguments to other functions
- Functions can be returned from functions
- Ability to assign the functions to variables 
- They can be passed into other functions and can be returned out of other functions



```js
let first = function (callAnonymouse){
    console.log(callAnonymouse)
    callAnonymouse()
}

first(function(){
    console.log('passing a function through arguments like values');
})

/*
ƒ (){
    console.log('passing a function through arguments like values');
}
"passing a function through arguments like values"
*/
```

```js
let x = function(param1){
    return function (){

    }
}

function xyz(){
    console.log('xyz')
}

x(xyz)
/*
    ƒ xyz(){
      console.log('xyz')
    }
*/
```
