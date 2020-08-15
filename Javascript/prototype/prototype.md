## prototype

**All JavaScript objects inherit properties and methods from a prototype.**
**Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.**

```
Prototype Inheritance

Prototype Inheritance
All JavaScript objects inherit properties and methods from a prototype:

Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype.

Adding Properties and Methods to Objects
Sometimes you want to add new properties (or methods) to all existing objects of a given type.

Sometimes you want to add new properties (or methods) to an object constructor.
```

```
Using the prototype Property

The JavaScript prototype property allows you to add new properties to object constructors:
```

```js
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.nationality = "English";

var myFather = new Person("John", "Doe", 50, "blue");
```

**The JavaScript prototype property also allows you to add new methods to objects constructors:**

```js
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};

var myFather = new Person("John", "Doe", 50, "blue");

console.log(myFather.name()); // ("John Doe");
```

### Object - Constructor

**You can not add a new property to an existing object constructor:**

```js
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.nationality = "English";

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

console.log(myFather.nationality, myMother.nationality); // undefined undefined
```

**To add a new property to a constructor, you must add it to the constructor function:**

```js
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "English";
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

console.log(myFather.nationality, myMother.nationality); // English English
```

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
obj.__proto__; // {fullName: ƒ}
protoObj; // {fullName: ƒ}
obj.fullName(); // "Frank Kim"
```
