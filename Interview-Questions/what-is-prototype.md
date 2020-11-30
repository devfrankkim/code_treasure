[source](https://medium.com/edge-coders/javascript-interview-questions-javascript-is-a-prototypal-language-what-do-i-mean-by-this-76937a9aa42a)
### What is a prototype?
- A prototype is an object. 
- When you declare a function, 
- A prototype is created and linked to that function. 
- In addition, the prototype object forms a link with its function creating a circular relationship.

```js
function NEW(constructor, argsArray) {
    var obj = {}; // step 1
    console.log(obj); // {}
    console.log(constructor);  // Parent f
    console.log(constructor.prototype); // {greet: ƒ, constructor: ƒ}
    obj.__proto__ = constructor.prototype; // step 2
    console.log(obj)// Parent {}
    console.log(obj.__proto__); // {greet: ƒ, constructor: ƒ}
    console.log(argsArray); // ["Mom"]
    console.log(obj); // Parent {} 
    constructor.apply(obj, argsArray); // step 3 - Parent {name: "Mom"}
    console.log(obj); // Parent {name: "Mom"}
    console.log(constructor)
    return obj; // step 4
}
function Parent(name) {
    this.name = name;
}
Parent.prototype.greet = function() {
    console.log("Hi, I'm " + this.name); 
}
var mom = NEW(Parent, ["Mom"]);
var dad = new Parent("Dad");

dad.greet(); // Hi, I'm Dad
```

### The Prototype Chain
```
When you access a property or method in Javascript. 
Javascript will check the object to see if that property exists. 
If it doesn’t it will check it’s prototype 
and 
will continue to walk up the prototype chain 
until it reaches the Object prototype. 
The linkages between prototype objects are formed via the __proto__ property.
```
### Class
```js
class Parent {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
}

var mom = new Parent("Mom");
mom.greet() // "Hi, I'm Mom"
```

```
Under the hood, 
Javascript just uses plain objects and creates links between those objects to form new relationships. 
This allows for much more flexible and powerful ways to compose and inherit from other objects. 
This leads us int0 our next Javascript interview question: 
“How can you inherit properties from other objects?”
```
```js
function Parent(name) {
  var obj = Object.create(parentProto);
  obj.name = name;
  return obj
}
var parentProto = {
  greet: function() {
    console.log("hi, I'm " + this.name); 
  }
};
var mom = Parent("Mom");
var dad = new Parent("Dad");
mom.greet();  // hi, I'm Mom
dad.greet();  // hi, I'm Dad
```

### Object.create
`The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.`