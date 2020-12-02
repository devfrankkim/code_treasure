# hasOwnProperty || in || getOwnPropertyNames

- This method can be used to determine whether an object has the specified property as a direct property of that object;

- Using hasOwnProperty as a property name

- Object.getOwnPropertyNames() returns an array

* Iterating over the properties of an object

* unlike the in operator, this method does not check for a property in the object's prototype chain.

### in

```js
const car = { make: "BMW", model: "frank", year: 1998 };

console.log("make" in car); // true

delete car.make;

car; // {model: "frank", year: 1998}

if ("make" in car === false) {
  car.make = "Ferrari";
}
car; // {model: "frank", year: 1998, make: "Ferrari"}

console.log(car.make); // Ferrari
```

### hasOwnProperty

- hasOwnProperty returns true even if the value of the property is null or undefined.

```js
let frank = new Object();

// null
frank.propNull = null;
frank.hasOwnProperty("propNull"); // true;
console.log(frank); // {propNull: null}

// undefined
frank.propUndefined = undefined;
frank.hasOwnProperty("propUndefined"); // true;
console.log(frank); // {propNull: null, propUndefined: undefined}
```

```js
var frank = {
  habbit: "breathing"
};

for (var name in frank) {
  if (frank.hasOwnProperty(name)) {
    console.log("this is (" + name + ") for sure. Value: " + frank[name]);
  } else {
    console.log(name); // toString or something else
  }
}

// this is (habbit) for sure. Value: breathing
```

```js
// Using hasOwnProperty as a property name

var foo = {
  hasOwnProperty: function() {
    return false;
  },
  bar: "Here be dragons"
};

foo.hasOwnProperty("bar"); // always returns false

// Use another Object's hasOwnProperty
// and call it with 'this' set to foo

({}.hasOwnProperty.call(foo, "bar")); // true
Object.prototype.hasOwnProperty.call(foo, "bar"); // true
```

```js
const object1 = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.getOwnPropertyNames(object1));
// expected output: Array ["a", "b", "c"]

var arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr).sort()); // .sort() is an array method.
// logs ["0", "1", "2", "length"]
```

```js
Object.getOwnPropertyNames("frank"); // (6) ["0", "1", "2", "3", "4", "length"] (ES2015 code)

// Array-like object
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.getOwnPropertyNames(obj).sort()); // (3) ["0", "1", "2"]

// Logging property names and values using Array.forEach
Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
  console.log(val + " -> " + obj[val]);
});
// logs
// 0 -> a
// 1 -> b
// 2 -> c

var my_obj = Object.create(
  {},
  {
    getFrank: {
      value: function() {
        return this.foo;
      },
      enumerable: false
    }
  }
);
my_obj.andrea = 10000;

console.log(Object.getOwnPropertyNames(my_obj).sort()); // (2) ["andrea", "getFrank"]

// =============== Get non-enumerable properties only ==================
var target = "frank";
var frankNumLength = Object.getOwnPropertyNames(target); // (6) ["0", "1", "2", "3", "4", "length"]

var enum_onlyFrank = Object.keys(target); // (5) ["0", "1", "2", "3", "4"]

var nonenum_only = enum_and_nonenum.filter(function(key) {
  var indexInEnum = enum_only.indexOf(key);
  if (indexInEnum == -1) {
    // Not found in enum_only keys,
    // meaning that the key is non-enumerable,
    // so return true so we keep this in the filter
    return true;
  } else {
    return false
  }
});

console.log(nonenum_only); // ["length"]
```
