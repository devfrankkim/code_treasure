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

```js
var animals = ["dog", "cat", "seal", "walrus", "lion", "cat"];
// 배열에서 원소를 제거
var deleteElement = animals.splice(animals.indexOf("walrus"), 1);
console.log(deleteElement); // 반환값은 제거한 원소
console.log(animals); // 원래 배열은 제거한 원소를 제외한 원소를 반환
// 새로운 원소를 삽압하기
animals.splice(animals.lastIndexOf("cat"), 1, "monkey", "puma");
console.log(animals);

var animals2 = ["cat", "walrus", "lion", "cat"];
// 새로운 원소 삽입
animals2.splice(-2, 1, "monkey"); // 끝에서 부터 2번째 인덱스, 1개의 원소를 제거하고 'monkey' 을 삽입
console.log(animals2);

// 잘라내는 원소의 개수가 주어지지 않는다면 시작 위치부터 배열 끝까지 모든 원소가 제거된다.
var animals3 = ["cat", "walrus", "lion", "cat"];
animals3.splice(2); // 2 인덱스부터 배열 끝가지 모든 원소를 제거
console.log(animals3);

var animals4 = ["cat", "dog", "lion", "cat"];
// 두 번째 원소를 다른 두 개의 값으로 치환
animals4.splice(3, 1, "zebra", "elephant"); // 3 번째 인덱스인 cat, 원소 1개를 제거하고 두 개의 원소를 삽입한다.
console.log(animals4);

// 반복문과 splice 를 사용한 원소 제거와 치환
var charSets = ["ab", "bb", "cd", "ab", "cc", "ab", "dd", "ab"];

// 원소 치환하기
while (charSets.indexOf("ab") != -1) {
  charSets.splice(charSets.indexOf("ab"), 1, "**");
}
console.log(charSets);

// 원소 제거하기
while (charSets.indexOf("**") != -1) {
  charSets.splice(charSets.indexOf("**"), 1);
}

console.log(charSets);
```
