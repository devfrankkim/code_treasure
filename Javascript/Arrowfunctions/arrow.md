# Arrow?

1. Arrow Functions and Lexical this Binding Part 1

You determine its value instead of JavaScript engine

**lexical binding**

This type of lexical binding can best be explained with an example.

implicit binding
explicit binding

```js
let protoObj = {
  fullName() {
    return this.firstName + " " + this.lastName;
  },
};

let obj = {
  firstName: "Frank",
  lastName: "Kim",
};
protoObj.fullName(); // "undefined undefined"
protoObj.fullName.bind(obj)(); // "Frank Kim"
Object.setPrototypeOf(obj, protoObj); // {firstName: "Frank", lastName: "Kim"}
// basically we will assign "protoObj" as the prototype of "obj"
obj.fullName(); // "Frank Kim"

let obj1 = {
  firstName: "Andrea",
  lastName: "Kim",
};

Object.setPrototypeOf(obj1, protoObj); // "Andrea Kim"
// basically we will assign "protoObj" as the prototype of "obj1"
```

# implicit vs lexical binding

for Arrow functions, it is lexically bound.
Meaning, this is bound to the outer lexical environment
lexical meaning what we have entered
so this is what we have entered.
this is the outer lexical environment
so it's going to get the global object as the value of "this"

```js
let protoObj = {
  //   fullName() {
  //     return this.firstName + " " + this.lastName;
  //   }

  fullName: () => this.firstName + this.lastName,
};
```
