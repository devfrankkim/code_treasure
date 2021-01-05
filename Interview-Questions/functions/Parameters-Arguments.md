## Parameters vs Arguments

- Parameters are local variables in the function scope

```js
var arguments = function(param1, param2){
    console.log('parameters are local variables in the function scope')
}
// you can't access param1, param2 outside the function
// you can call them as identifiers or labels

arguments(1, 2)
console.log(param1, param2); // Uncaught ReferenceError: param1, param2 is not defined


// great different cars -> arguments
// parking spaces -> parameters
```