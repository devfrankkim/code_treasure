## Relation of Scope Chain and Closures

```js
function outerParents(){
    let parents = "parents";
    function outer(b){
        function inner(){
            console.log(a); // 1000
            console.log(b); // "Hello Frank"
            console.log(parents); // parents
        }
        let a = 1000;
        return inner; 
    }
    return outer
}


let scopeChainResult = outerParents()('Hello Frank');
scopeChainResult(); 
``` 