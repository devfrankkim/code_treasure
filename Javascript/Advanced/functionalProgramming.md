# 함수형 프로그래밍이란?

함수형 프로그래밍은 다름 함수의 파라미터로 넘길 수도 있고,
반환 (return) 값으로 함수를 받을 수도 있는 프로그래밍 형태이다.

함수형 프로그래밍에서, 우리는 함수라는 용어 하에서 생각하고 코딩하게 된다.

# 퍼스트 클래스(First-Class)함수

자바스크립트가 함수를 일급 시민(first-class citizen)으로 대해준다는 것을 들어봤을 것이다.
왜냐하면, 자바스크립트 또는 다른 함수형 프로그래밍 언어 함수들은 전부 Object(객체)이기 때문이다.

JavaScript에서 함수는 객체의 특별한 타입이다. 함수는 Function 객체다.
예를 들면,

```js
function greeting() {
  console.log("Hello World");
}

// 함수 호출하기.
greeting(); // prints 'Hello World'
```

JavaScript에서 함수가 오브젝트 인것을 증명하기 위해서, 우리는 다음과 같은 코드를 작성할 수 있다.

```js
greeting.lang = "English";

// Prints 'English'
console.log(greeting.lang);
```

알아둘 것 - 위 문법은 자바스크립트에서 완전히 유효한 문법인 반면에, 위와 같이 코드를 작성하는 것은 매우 위험하게 여겨지고 있습니다

_함수 Object에 랜덤한 property를 추가하지 않는 것이 좋다. 만약에 사용해야 한다면, Object를 사용하는 것이 좋다._

자바스크립트에서, object, string, number와 같은 타입으로 할 수 있는 것은, 함수로 할 수 있다.

함수를 파라미터로 다른 함수에 넘길수도 있고 (callback),
함수를 다른 변수에 할당하거나 다른 곳으로 넘길 수 있다.
이러한 특성 때문에 자바스크립트에 존재하는 함수들이 퍼스트 클래스 함수라 불린다.

summary =>
함수를 파라미터로 다른 함수에 전달 할 수 있다(callback)
함수를 다른 변수에 할당하거나, 다른 곳으로 넘길 수 있다.

### 함수를 변수에 할당하기

우리는 자바스크립트에서 함수를 변수에 할당할 수 있습니다.

ex) 함수를 변수에 할당하기

```js
// 함수를 변수에 할당하기
// function(){return x * x} 를 square 변수에 할당한다.
// square === f(x){return x * x}
// square() === NaN
// square(5) === f(5){return 5 * 5} // 25

const square = function(x) {
  return x * x;
};

// prints 25
square(5);
```

### 함수를 여러 곳에 넘길 수도 있다.

```js
// 함수를 여러 곳에 넘길 수도 있다.

const foo = square;

// prints 36
foo(6);
```

### 함수를 여러 곳에 파라미터로 넘기기

말 그대로, A함수 파라미터에 B, C, D 함수를 전달 할 수 있다.  
summary => 해당 함수 파라미터 자리에 매핑한다.

```js
function add() {
  console.log("add");
}
function minus() {
  console.log("minus");
}
function divide() {
  console.log("divide");
}
function A(type, addFn, minusFn, divideFn) {
  if (type === "add") {
    return addFn();
  } else if (type === "minus") {
    return minusFn();
  } else if (type === "divide") {
    return divideFn();
  }
}
console.log(A("add", add, minus, divide)); // add
console.log(A("minus", add, minus, divide)); // minus
console.log(A("divide", add, minus, divide)); // divide
```

```js
// 함수를 여러 곳에 파라미터로 넘길 수 있다.

function formalGreeting() {
  console.log("How are you?");
}

function casualGreeting() {
  console.log("What's up?");
}

function greet(type, greetFormal, greetCasual) {
  if (type !== "formal" && type !== "casual") {
    return `The type should be "casual" or "fomal"`;
  }

  if (type === "formal") {
    greetFormal();
  } else if (type === "casual") {
    greetCasual();
  }
}

// prints "What's up?"
greet("casual", formalGreeting, casualGreeting);
```

## 고차 함수(Higher-Order Function)

고차함수는 함수를 인자로 받거나, 함수를 반환함으로써 작동하는 함수다.
간단히 말하자면,

고차 함수는

1. 함수를 인자로 받거나
2. 함수를 출력(output)으로 반환(return)하는 함수를 말한다.

예를 들면, Array.prototype.map, Array.prototype.filter 그리고
Array.prototpye.reduce가 언어 내부에 built-in 포함된 고차함수다.

고차 함수의 동작.

먼저, 내부적(built-in) 고차 함수의 예제부터 확인한 뒤,
고차함수를 사용하지 않았을 때의 솔루션과 비교해보자.

### Array.prototype.map

map() 메소드는 입력으로 들어온,
배열 내 모든 엘리먼트를 인자로 제공받는
콜백함수를 호출함으로써 새로운 배열을 만들어낸다.

map으로 전해진 콜백함수는 3가지를 인자를 받는다.

1. element
2. index
3. array

```js
[1, 2, 3].map(v => v + 1); // [2, 3, 4]
```

Example #1

우리가 숫자가 들어있는 배열을 가지고 있고 각각의 숫자 값이 2배가 된 배열을 만들길 원한다고 해보자.
고차 함수(Higher-Order function)가 없을 때와 있을 때,
각각 우리가 문제를 어떻게 해결할 수 있는지 확인해보자.

```js
// 고차 함수가 아닌 함수로 작성
const arr1 = [1, 2, 3];
const arr2 = [];

for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}
console.log(arr2); // [2, 4, 6]
```

```js
// 고차 함수
// 함수를 인자로 전달해서, 함수를 반환한다.
const arr1 = [1, 2, 3];

const arr2 = arr1.map(function(item) {
  return item * 2;
});

console.log(arr2); // [2, 4, 6]
```

```js
// Arrow function
// 화살표 함수 문법을 이용하면 훨씬 짧게 작성 가능하다.

const arr1 = [1, 2, 3];
const arr2 = arr1.map(item => item * 2);
console.log(arr2);
```
