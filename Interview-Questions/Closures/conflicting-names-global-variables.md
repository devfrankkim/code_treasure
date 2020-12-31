## Conflicting name Global variables in JS



```js
function outerParents(){
    let parents = "parents";
    function outer(b){
        function inner(){
            console.log(a); // 1000
            console.log(b); // "Hello Frank"
            console.log(parents); // parents
            console.log(c); // "C"
        }
        let a = 1000;
        return inner; 
    }
    return outer
}
let a = 100; // this is a separate variable
let c = "C";

let scopeChainResult = outerParents()('Hello Frank');
scopeChainResult(); 
``` 