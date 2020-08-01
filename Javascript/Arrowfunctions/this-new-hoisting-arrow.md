```js
let myObj = {
  myMethod: function() {
    console.log(this);
  }
};

myObj.myMethod(); //{myMethod: ƒ}
let myFuc = myObj.myMethod;
myFuc(); // Window
```

## Solution => Arrow function

```js
let myObj2 = {
  name: "frank",
  arrow: function() {
    let myMethod = () => {
      console.log(this.name);
    };
    return myMethod();
  }
};

myObj2.myMethod(); // Window
myObj2.arrow(); // frank
```

```js
let myObj3 = {
  name: "frank",
  arrow: () => {
    console.log(this);
    let myMethod = () => {
      console.log(this);
    };
    return myMethod();
  }
};

myObj3.arrow(); // Window
```

```
() => {} this always points to the parent which is calling them
not always global
but parents who is calling them
```

```js
const obj = {
  myFunction() {
    console.log(this);
  },

  myFunction3() {
    function myFunction4() {
      console.log(this);
    }

    return myFunction4();
  }
};

function myFunction2() {
  console.log(this);
}

obj.myFunction(); //{myFunction: ƒ, myFunction3: ƒ}

const test1 = obj.myFunction;
test1(); // Window
obj.myFunction3(); // Window
```

### "new" keyword

1. an Object is created pointing to the constructor function
2. this inside that particular function actually points to the new Object

```js
function myFunction2() {
  console.log(this);
}
const noNew = myFunction2(); // Window
const myOwnNew = new myFunction2(); //  myFunction2 {}
const myOwnNew100 = new myFunction2(); //  myFunction2 {}
myOwnNew.name = "frank"; // myFunction2 {name: "frank"}
myOwnNew100.name = "andrea"; // myFunction2 {name: "frank"}

myOWnNew; //myFunction2 {name: "frank"}
myOwnNew100; // myFunction2 {name: "andrea"}
```

### Hoisting

- var is hoisted
- let and const hoist but you cannot access them before the actual declaration is evaluated at runtime.
- Arrow functions are NOT hoisted
- "this" in arrow function is binded to the previous value of "this"
- All declarations (var, let, const, function, class) are "hoisted" in JavaScript.

```js
console.log(myFunction());
function myFunction() {
  return 100;
}
```

```js
console.log(x); // undefined
var x = 100;

// Hoisting
var y; // hoisted
console.log(y); // undefined
y = 10;

// temporal dead zone (const, let) from the start of the block until the declaration is processed.
console.log(xError); // ReferenceError: Cannot access 'xError' before initialization
const xError = 100;
```

```js
console.log(x()); //  Error: x is not a function
console.log(y()); //  Error: y is not defined
console.log(z()); //  ReferenceError: Cannot access 'z' before initialization

var x = () => {
  return 100;
};
let y = () => {
  return 100;
};
const z = () => {
  return 100;
};
```

### Arrow

- "new" won't work with Arrow functions
- Always will look for "this" outside the arrow function(parent)
- NOT hoisted

```js
function myFunction() {
  return 100;
}

const myFunction = () => {};
```

```js
const arrowFunction = () => {
  return this;
};

// const normalFunction = function() {
//   return this;
// };

function normalFunction() {
  return this;
}

const arrowNew = new arrowFunction(); // arrowFunction is not a constructor
const normalNew = new normalFunction(); // normalFunction {}
```

```js
const obj = {
  // normalMethod: function() {}
  normalMethod() {
    return this;
  },
  arrowMethod: () => {
    return this;
  }
};

console.log(this); // Window

let normal = obj.normalMethod;
let arrow = obj.arrowMethod;
console.log(normal(), arrow()); // Window

arrow(); //
/*  
 - Bound to the parent of the Object (obj). 
 - Always will look for  "this" outside the arrow function

() => {
    return this;
  }
*/

function myFunction() {
  // this -> Points to myFunction
  return () => {
    return this;
  };
}

function newObjConstructor() {
  return console.log(`${this} you got it`);
}
const newObj = new myFunction();
console.log(newObj()); // myFunction {}
console.log(new newObj()); // newObj is not a constructor
console.log(new newObjConstructor()); // [object Object] you got it & newObjConstructo{}

const newConstructor = new newObjConstructor();
console.log(newConstructor); // newObjConstructor {}
```

```js
function myCarThis() {
  this.fuel = 50;
  // this -> myCarThis
  this.reFuel = function() {
    console.log(this); // myCarThis {fuel: 50, reFuel: ƒ}

    // setTimeout is different
    // setTimeout gets called separately. It doesn't get called from the Object
    // setTimeout is independent
    // inside the setTimeout does not really refer to the Object any more
    // so "this" inside setTimeout gets lost
    // solution 1 => set a specific variable
    setTimeout(function() {
      this.fuel += 100;
      console.log(`Refuled!!! Current fuel = ${this.fuel}`); // NaN
    }, 1000);
  };
}

function myCarThat() {
  this.fuel = 50;
  this.reFuel = function() {
    console.log(this); // myCarThis {fuel: 50, reFuel: ƒ}
    let that = this;
    setTimeout(function() {
      that.fuel += 100;
      console.log(`Refuled!!! Current fuel = ${that.fuel}`); // 150
    }, 1000);
  };
}

function myCarArrow() {
  this.fuel = 50;
  this.reFuel = function() {
    setTimeout(() => {
      this.fuel += 100;
      console.log(`Refuled!!! Current fuel = ${this.fuel}`); // 150
    }, 1000);
  };
}

var Ferrari = new myCarThis();
var Ferrari = new myCarThat();
var Ferrari = new myCarArrow();
Ferrari.reFuel();
```

```js
let myself = {
  sleepy: function() {
    this.sleepy = 1;
  }
};

myself.sleepy();
myself; // {sleepy: 1}
```

```js
function(args){} // ES5

(args) => {} // ES6

```

### sumamry

- this
  **HOW the function is invoking Matters**
  **return is calling directly so it can return Window**

- new
  **"new" has new behaviors for('this', Object)**

- hositing
  **var is hoisted**
  **All declarations (var, let, const, function, class) are "hoisted" in JavaScript.**
  **let and const hoist but you cannot access them before the actual declaration is evaluated at runtime.**
  **BUT Arrow functions are NOT hoisted**
  **"this" in arrow function is binded to the previous value of "this"**

- Arrow
  **Arrow functions are NOT hoisted**
  **They bind `this` to a particular value no matter what**
  **Cleaner and shorter syntax**
