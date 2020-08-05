Destructuring means taking out ( technically, making a copy of ) individual items from an object or an array and assigning them to a variable. Example ( with arrays)

### Array

```js
var address = [100, "king street", "toronto"];
var [houseNo, , city] = address;
console.log(houseNo, city); // 100 "king street" "toronto"

console.log(houseNo, , city);


var address = [100, "king street", "toronto"];
var [houseNo ,  , city] = address;

console.log(houseNo, city); // 100 "toronto"


```

### Objects

```js
const details = { firstName: "Code", lastName: "Burst", age: 22 };
const { firstName, age } = details;
console.log(firstName, age); // Code 22
```
