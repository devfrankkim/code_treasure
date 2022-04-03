## [JavaScript] 얕은 복사(Shallow Copy)와 깊은 복사(Deep Copy)

[소스: https://shinejaram.tistory.com/67]

- 상황에 따라 깊은 복사와 얕은 복사를 자유자재로 쓸 수 있어야 자바스크립트의 기본은 할 수 있다고 말할 수 있다

## 자바스크립트 "참조"

- 참조라는 것은 자바스크립트가 -> 데이터를 생성할 때 그 데이터를 -> 메모리에 저장하는 것과 관련이 있다.

- 자바스크립트는 선언한 데이터 등을 -> "메모리에 저장"하고 -> 이를 "주소값으로 참조" 하여 필요한 경우에 활용하는 언어다.

- 원래 값과 복사된 값이 `같은 참조`를 `가리키고 있다`는 것은, "원래 생성한 객체와 -> 이를 복사하여 새로 생성한 객체가 -> `메모리의 같은 주소를 활용`하고 있다는 뜻."

- 따라서 원본 객체의 데이터를 바꿀 경우, 새롭게 복사된 객체도 이 변화에 영향을 받는다.

- 따라서 얕은 복사를 활용할 경우, 복사된 데이터로 인해 오류가 발생하지 않도록 신경을 써주어야 한다.

## 원시타입은 (unique 한 메모리를 가짐.) & 영혼 타입

- 이렇게 자바스크립트의 원시 타입은 깊은 복사가 되며 (unique memory)
- 이는 독립적인 메모리에 값 자체를 할당하여 생성하는 것이라 볼 수 있다.

## 얕은 복사(대충 복사함) (참조하고 있는 주소가 같다.) 얕은 복사 === 주소값 복사

`object.assign()` & `spread 연산자(전개 연산자)` & `slice` & `splice`

- 얖은 복사는 -> 참조 (주소) 값의 복사를 나타낸다.
- 객체는 얕은 복사가 되는 것 -> 주소가 같다. -> 똑같은 주소를 참조한다.
- 얕은 복사란 객체를 복사할 때 원래 값과 복사된 값이 같은 참조를 가리키고 있는 경우를 말한다.
- 객체 안에 객체가 존재하는 경우, 그 안의 객체 중 하나라도 원본의 객체를 참조하고 있다면 이를 얕은 복사라고 한다.

## 깊은 복사(영혼까지 복사함) (깊은 복사란 얕은 복사와는 달리 참조 값을 공유하지 않는 복사)

**값만 복사 + 주소가 다름**

- 메모리가 unique 하다. (메모리가 독립적이다.)
- 참조하고 있는 주소가 다르다.

- 따라서 원본 객체값의 데이터가 변화한다고 해도 복사된 객체의 데이터는 영향을 받지 않게 됩니다.
- 하지만 이 방식은 메모리에 새로운 데이터를 할당한다는 측면에서 메모리의 효율성이 떨어지고 (코드의 성능 저하로 이어짐), 코드의 가독성을 저해할 수 있다는 점에서 필요한 경우가 아니라면 그다지 추천하지 않는 복사 방법.
- 객체를 그대로 복사하여 사용할 경우, 기존 객체의 원본 데이터가 더럽혀 질 수 있기 때문에 객체의 깊은 복사는 매우 중요하다.

==================================================

```js
const a = [{ o: "hello" }];
const b = a.slice();

console.log(a[0] === b[0]); // true
```

```js
const obj = { id: 1 };
const newObj = obj;

newObj.id = 2;

console.log(obj.id); // 2
console.log(obj === newObj); // true
```

깊은 복사는 -> 값 자체의 복사를 나타낸다.
이렇게 자바스크립트의 원시 타입은 깊은 복사가 되며
이는 독립적인 메모리에 값 자체를 할당하여 생성하는 것이라 볼 수 있다.

### Object.assign()

```js
const obj = { a: 1 };
const newObj = Object.assign({}, obj);

newObj.a = 2;

console.log(obj); // { a: 1 }
console.log(obj === newObj); // false
```

### Object.assign()는 2차원 객체는 깊은 복사가이루어지지 않는다

### 하지만 Object.assign()를 활용한 복사는 완벽한 깊은 복사가 아니다.

```js
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const newObj = Object.assign({}, obj);
newObj.b.c = 3;

console.log(obj); // { a: 1, b: { c: 3 } }
console.log(obj.b.c === newObj.b.c); // true
```

- 위처럼 obj 객체의 b 프로퍼티의 값으로 { c: 2 } 객체를 가진 2차원 객체일 경우는 경우는 어떨까?

- 2차원 객체를 newObj에 복사하고, newObj.b.c의 값을 변경하였다. 기존 obj 객체를 출력해보면 newObj.b.c의 값도 3으로 변경되었다. 복사된 하위 객체 { c: 2 }도 결국 객체이기 때문에 얕은 복사가 이루어진 것이다. 이는 Object.assign() 메서드의 한계이며, 전개 연산자(Spread Operator) 를 이용한 객체의 복사에도 같은 문제가 있다.

### 객체의 깊은 복사가 가능하다?

### 전개 연산자(Spread Operator)

```js
const a = { id: 1 };
const b = { ...a };

console.log(a === b); // false
```

```js
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const newObj = { ...obj };
console.log(obj === newObj); // false

newObj.b.c = 3;

console.log(obj); // { a: 1, b: { c: 3 } }
console.log(obj.b.c === newObj.b.c); // true
```

- 하지만 Object.assign()와 마찬가지로 2차원 객체는 얕은 복사가 되는 것을 확인할 수 있다.

### JSON 객체 메소드를 이용 (객체의 깊은 복사) + 함수를 undefined로 처리한다.

- 객체의 깊은 복사를 위해 JSON 객체의 stringify(), parse() 메소드를 사용할 수 있다.

  - `문법 JSON.stringify() 메소드는 인수로 객체를 받으며 받은 -> 객체는 문자열로 치환되며,`
  - `JSON.parse() 메소드는 문자열을 인수로 받으며, 받은 -> 문자열을 객체로 치환한다.`
  - `JSON.stringify() 메소드는 "함수"를 만났을 때 undefined로 처리한다는 점이다.`

- 객체 -> 문자열 -> 객체 (새로운 객체)

```js
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const newObj = JSON.parse(JSON.stringify(obj));
console.log(obj === newObj); // false

newObj.b.c = 3;

console.log(obj); // { a: 1, b: { c: 2 } }
console.log(obj.b.c === newObj.b.c); // false

// ====== 복사된 newObj는 func가 없고 undefined로 출력되고 있다. ======
console.log(obj); // {a: 1, b: {…}, func: ƒ}
console.log(newObj); // {a: 1, b: {…}}
```

- 하지만 이 방법도 2가지 문제가 있는데, 다른 방법에 비해 성능이 느린 점과
- JSON.stringify() 메소드는 함수를 만났을 때 undefined로 처리한다는 점이다.

### 커스텀 재귀 함수

- 이 문제를 원칙적으로 해결하려면 직접 깊은 복사를 구현하는 커스텀 재귀 함수를 사용하는 것이다.

```js
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let copy = {};
  for (let key in obj) {
    copy[key] = deepCopy(obj[key]);
  }
  return copy;
}

const obj = {
  a: 1,
  b: {
    c: 2,
  },
  func: function () {
    return this.a;
  },
};

const newObj = deepCopy(obj);

newObj.b.c = 3;
console.log(obj); // { a: 1, b: { c: 2 }, func: [Function: func] }
console.log(obj.b.c === newObj.b.c); // false
```

- 인수값이 객체가 아닌 경우는 그냥 반환하며, 객체인 경우 객체의 값 만큼 루프를 돌며 재귀를 호출하여 복사된 값을 반환한다. 복사된 newObj 객체를 보면 2차원 객체의 값도 깊은 복사가 이루어 졌으며, 객체의 함수도 제대로 표현되는 것을 확인할 수 있다.

### lodash 모듈의 cloneDeep()

` npm i lodash`

- lodash 모듈의 cloneDeep() 메소드를 이용하여 객체의 깊은 복사가 가능하다. 해당 모듈을 설치해 준 뒤 아래 코드를 실행시켜 보자.

```js
const lodash = require("lodash");

const obj = {
  a: 1,
  b: {
    c: 2,
  },
  func: function () {
    return this.a;
  },
};

const newObj = lodash.cloneDeep(obj);

newObj.b.c = 3;
console.log(obj); // { a: 1, b: { c: 2 }, func: [Function: func] }
console.log(obj.b.c === newObj.b.c); // false
```
