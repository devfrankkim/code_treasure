### structuredClone()

- 새로운 B객체를 생성 후 원본 A객체를 메모리 영역을 참조해서 원본에 종속된 객체를 생성하는 것이 얕은 복사이다.
  새로운 B객체를 생성 후 원본 A객체를 통째로 복사해서 독립적인 새로운 객체를 메모리 영역에 생성하는 것이 깊은 복사이다.

```js
// JavaScript - 내장 deep copy

structuredClone(value);
structuredClone(value, options);

// Create an object with a value and a circular reference to itself.
const original = { name: "MDN" };
original.itself = original;

// Clone it
const clone = structuredClone(original);

console.assert(clone !== original); // the objects are not the same (not same identity)
console.assert(clone.name === "MDN"); // they do have the same values
console.assert(clone.itself === clone); // and the circular reference is preserved
```
