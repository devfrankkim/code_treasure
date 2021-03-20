# What is binding? and "this"? and arrow function?

## This is the way JavaScript allows you to connect a function with with an Object

```js
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42
```

func.bind(thisArg[, arg1[, arg2[, ...]]])

# 매개변수 Parameter

### thisArg

바인딩 함수가 대상 함수(target function)의 this에 전달하는 값이다. // 1첫번째 => this

**바인딩 함수를 new 연사자로 생성한 경우 무시된다.**
**bind를 사용하여 setTimeout 내에 콜백 함수를 만들 때, thisArg로 전달된 원시 값은 객체로 변환된다.**
**bind할 argument가 제공되지 않으면 실행 스코프 내의 this는 새로운 함수의 thisArg로 처리된다.**

### arg1, arg2, ...

대상 함수의 argument 앞에 사용될 argument

bind할 argument가 없으면, 실행 스코프 내의 this는 새로운 함수의 thisArg로 처리된다?

# 반환 값

지정한 this 값 및 초기 argument를 사용하여 변경한 원본 함수의 복제본.
A copy of the given function with the specified this value, and initial arguments (if provided).

bind() 함수는 새로운 바인딩한 함수를 만듭니다
바인딩한 함수는 원본 함수 객체를 감싸는 함수다.

ECMAScript 2015에서 말하는 특이 함수 객체 exotic function object
바인딩한 함수를 호출하면 일반적으로 래핑된 함수가 호출 됩니다.

바인딩한 함수는 다음과 같은 내부 속성을 가지고 있습니다.

1 [[BoundTargetFunction]] - 바인딩으로 감싼(wrapped) 원본 함수 객체.
2 [[BoundThis]] - 감싸진 함수를 호출했을 때 항상 전달되는 값.
3 [[BoundArguments]] - 감싸진 함수가 호출될 때 첫 번째 인수로 사용되는 값들의 목록.
4 [[Call]] - 이 객체와 관련된 코드 실행. 함수 호출 식을 통해 호출됨. 내부 메소드의 인수는 this 값 및 호출 식으로 함수에 전달되는 인수를 포함하는 목록입니다.

BoundTargetFunction.bind(BoundThis, BoundArguments)
call => (BoundThis, BoundArguments)

예제

# 바인딩된 함수 생성

bind()의 가장 간단한 사용법은 호출 방법과 관계없이 특정 this 값으로 호출되는 함수를 만드는 겁니다.
초보 JavaScript 프로그래머로서 흔한 실수는 객체로부터 메소드를 추출한 뒤 그 함수를 호출할때,
원본 객체가 그 함수의 this로 사용될 것이라 기대하는 겁니다(예시 : 콜백 기반 코드에서 해당 메소드 사용).

**그러나 특별한 조치가 없으면, 대부분의 경우 원본 객체는 손실됩니다.**
**원본 객체가 바인딩 되는 함수를 생성하면, 이러한 문제를 깔끔하게 해결할 수 있습니다.**

```js
this.x = 9;
var module = {
  x: 81,
  getX: function() {
    return this.x;
  }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();
// 9 반환 - 함수가 전역 스코프에서 호출됐음

// module과 바인딩된 'this'가 있는 새로운 함수 생성
// 신입 프로그래머는 전역 변수 x와
// module의 속성 x를 혼동할 수 있음
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81
```

# 부분 적용 함수 Partially applied functions

bind()의 다음으로 간단한 사용법은 미리 지정된 초기 인수가 있는 함수를 만드는 겁니다.
지정될 초기 인수가 있다면 제공된 this 값을 따르고,
바인딩 된 함수에 전달되어 바인딩 된 함수가 호출될 때마다 대상 함수의 인수 앞에 삽입됩니다.

```js
function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
```

```js
constructor(){
    this.handleClick = handleClick.bind(this);
}

so what is bind doing?





```

```js
const userOne = {
  firstName: "Frank",
  lastName: "Kim"
};

const userTwo = {
  firstName: "Andrea",
  lastName: "Kim"
};

// anonymous function that is stored inside a variable

// what am I going to want to accomplish?
// being able to inject and bind alert
// I want to bind the function and the objects together

const fullName = function() {
  return `${this.lastName}, ${this.firstName}`;
};

userOne.fullName(); // error; => fullName isn't inside the userOne
// fullName should refer to userOne for 'this'
const Frank = fullName.bind(userOne);
// fullName.bind(userOne)()

const Andrea = fullName.bind(userTwo);
// fullName.bind(userTwo)()

Frank(); //  Frank Kim
Andrea(); // Andrea Kim
```

This is the way JavaScript allows you to connect a function with with an Object

so instead of having to create a function and pass the arguments,

### Arrow function

```js
const userOne = {
  firstName: "Frank",
  lastName: "Kim"
};

const userTwo = {
  firstName: "Andrea",
  lastName: "Kim"
};

const fullName = () => {
  return `${this.lastName}, ${this.firstName}`;
};

const Frank = fullName.bind(userOne);
const Andrea = fullName.bind(userTwo);

Frank(); //  undefined
Andrea(); //  undefined
```

```
whenever you use an arrow function,

The key difference between a function expression and arrow function is the arrow function changes
the way "this" works so you have to be careful.

If you run into any bugs where you are trying to binding an object with a function and you are getting undefined and the issue may be that it's referencing the wrong scopes of "this"

So when you use an arrow function,
"this" is actually referencing the only scope of the single function.
Not is bound to it.
```

```js
const fullName = function() {
  return `${this.lastName}, ${this.firstName}`;
};

const fullName = () => {
  return `${this.lastName}, ${this.firstName}`;
};
```

# Arrow function

it's not just shorter function.
it's changing the scope of "this"
