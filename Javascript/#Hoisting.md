# Hoisting (Functions, class, var, let, const)

[Hoisting](https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1)

### _(var) variables move to the top. Not the value._

### _functions are also hoisted to the top_

### But what about Let and Const?

### So is there any difference between var, let and const in terms of hoisting?

```
//var myName; hoisting that's why this variable moved to the top.
console.log(myName);
myName = ‘Sunil’;

console.log(myName); // undefined
```

We have named our variable myName instead of simply name as the ‘window’ object in the browser already has a name property. If we were to test this in a browser, any variables created in the global scope actually end up being part of the ‘window’ object. Therefore, creating var name = 'Sunil'; is the same as doing window.name = 'Sunil'; and therefore, creating var name = ‘Sunil'; can also be referenced by typing window.name.

```js
function hey() {
  console.log("hey " + myName);
}
hey();
var myName = "Sunil";

# RUNTIME #

function hey() {
console.log('hey ' + myName);
};
var myName;
hey();
myName = 'Sunil';

```

_But what about Let and Const?_

So is there any difference between var, let and const in terms of hoisting?
Yes, if you create a var at the top level (global level), it would create a property on the global object => in the case of a browser, this is likely to be the window object.
So creating var myName = 'Sunil'; can also be referenced by calling window.myName.

However, if you wrote let newName = 'Sunny'; this would not be accessible in the global window object — therefore, you would not be able to use window.newName as a reference to 'Sunny'.

### The following issue is also fundamental to your understanding of how hoisting can affect your codebase.

Declarations made with var can be accessed from outside of their initial scope, whereas declarations made with let and const are not.

As we can see in the below example, declarations made with var return undefined whereas those made with let and const return errors

```js
// VAR Global SCOPE
console.log(‘1a’, myName1); // undefined
if (1) {
 console.log(‘1b’, myName1); // undefined
 var myName1 = ‘Sunil’;
}
// LET SCOPE
console.log('2a', myName2); // error: myName2 is not defined
if (1) {
    console.log('2b', myName2); // undefined
    let myName2 = 'Sunil';
}

// CONST SCOPE
console.log('3a', myName3); // error: myName3 is not defined
if (1) {
    console.log('3b', myName3); // undefined
    const myName3 = 'Sunil';
}
```
