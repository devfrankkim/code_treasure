## 유사배열객체

- 배열처럼 length 속성도 존재하고 배열과 같이 숫자 속성인 인덱스 도 존재한다.
- 그러나 배열과 달리 키가 숫자형이 아닌 속성이나 메서드가 붙어 있을 수 있다.
- 이럴 때 for in문을 이용하면 모든 속성을 대상으로 순회가 이루어진다.

### 유사배열과 배열의 다른 점

- 유사배열은 엄밀히 따지면 배열은 아니기 때문에 배열 메서드를 사용할 수 없음.
- 그러나 메서드를 빌리면 다음과 같이 배열 메서드를 사용할 수 있다.

```js
const a = { 0: "a", 1: "b", 2: "c", length: 3 };
Array.prototype.forEach.call(a, (v) => console.log(v)); // a b c 출력
```

- 혹은 Array.from(a)을 이용하여 유사배열을 인잣값으로 넘기면 배열이 생성된다.

###

```js
var array = [1, 2, 3];
array; // [1, 2, 3]
var nodes = document.querySelectorAll("div"); // NodeList [div, div, div, div, div, ...]
var els = document.body.children; // HTMLCollection [noscript, link, div, script, ...]

Array.isArray(array); // true
Array.isArray(nodes); // false
Array.isArray(els); // false
```

### 유사배열 만들기 (유사배열 메소드 빌릴 때.)

```js
const a = {
  0: 1,
  1: 1,
  2: 0,
  length: 3,
};

const result = [].filter.call(a, (n) => n > 0);

console.log(result);

const a = {
  0: 1,
  1: 1,
  2: 0,
  length: 3,
};

console.log(a.length); // 3

const result = Object.prototype.hasOwnProperty.call(a, "length");
console.log(result, !!a.length); // true, true
```
