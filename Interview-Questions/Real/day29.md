### How do you detect primitive or non primitive value type

- In JavaScript, primitive types include boolean, string, number, BigInt, null, Symbol and undefined.
- Whereas non-primitive types include the Objects. But you can easily identify them with the below function

```js
// Object()

var myPrimitive = 30;
var myNonPrimitive = {};
function isPrimitive(val) {
  return Object(val) !== val;
}

isPrimitive(myPrimitive);
isPrimitive(myNonPrimitive);
```
