# indexOf(){searchElement, ?fromIndex} & lastIndexOf(){searchElement, ?fromIndex} Find Index

_very sensitive to uppercase/lowercase letters_

1. indexOf() The positon starts at the first index [0]
2. indexOf() returns -1 for false

   because this is method, what goes in front of the method has to be the object of the correct type so it's the string object that has the method indexOf()

---

1. lastIndexOf() The position starts at the end of the index and goes backwards through the string and when it finds the value, it counts the value from the beginning.

---

_They both count the value from the start. They find the value in the same place._

### However, the \*direction of the search is different.

_indexOf() searches from the first index and then gets the value_
_lastIndexOf() searchs from the last index (going backwards) BUT it finds the value from the first index_

It is like a marathon. indexOf() starts checking and getting value from the first.
lastIndexOf() is the last finish line but you want to check the distance so you have to go to the start to check the distance

```js
var lovely = "the lovely the";
console.log(lovely.indexOf("the", a.indexOf("lovely"))); // 11
console.log(lovely.indexOf("lovely", a.indexOf("the") + 1)); // 4;
```

```js
var a = [1, 1, 2, 2, 1];
console.log(a.indexOf(2)); // 2
console.log(a.lastIndexOf(2)); // 3
console.log(a.indexOf(1, 1)); // 1
console.log(a.lastIndexOf(1, 1)); // 1

var b = [1, 1, 2, 1];
console.log(b.indexOf(2)); // 1
console.log(b.lastIndexOf(2)); // 2
```

```js
let word = "Frank";
let sentence =
  "In the end, Frank decided to sell the house and travel around the world.";
let log = console.log;
indexOf(a);
log(word.indexOf("f")); // -1
log(word.toLowerCase().indexOf("f")); //  [0] => 0
log(word.indexOf("F")); // [0] => 0

// word.toLowerCase(); // change the original
setence.indexOf("e"); // 5
sentence.lastIndexOf("e"); // 64
```

### How to delete elements and return the array

```js
var animals = ["dog", "cat", "lion", "tiger", "lizard", "deer"];

var deleteElement = animals.splice(animals.indexOf("dog"), 1);
console.log(deleteElement); // ["dog"]
console.log(animals); // ["cat", "lion", "tiger", "lizard", "deer"];

var deleteElement = animals.splice(animals.indexOf("dog"), 2);
console.log(deleteElement); // ["dog", "cat"];
console.log(animals); // ["lion", "tiger", "lizard", "deer"]
```

### How to add elements in the array

```js
var animals = ["dog", "cat", "lion", "tiger", "lizard", "deer"];
animals.splice(animals.lastIndexOf("deer"), 1, "chicken", "pig");
console.log(animals);
```

```js
var indices = [];
var array = ["a", "b", "a", "c", "a", "d"];
var element = "a";
var idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1;
}

console.log(indices);
// [4, 2, 0]
```
