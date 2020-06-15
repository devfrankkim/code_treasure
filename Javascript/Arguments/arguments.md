# What is Arguments?

```js
function sum() {
  var _sum = 0;

  for (i = 0; i < arguments.length; i++) {
    document.write(i + " : " + arguments[i] + "<br />");
    _sum += arguments[i];
  }
  return _sum;
}
document.write("result : " + sum(1, 2, 3, 4));
```

```js
function one(arg) {
  console.log("one.length", one.length); // 1 (parameter)
  console.log("arguments", arguments.length); // 2 (arguments)
}
one("one", "two");
```

```
arguments.length
자바스크립트와 약속되어 있는 특수한 이름의 변수명이다.
arguments 유사 배열 있다.

이 배열 하는 역할?
저 안에는 사용자가 전달한 arguemnt가 들어가 있다.
그 객체를 통해서 argument를 접근 할 수 있다.
arguments.length 배열처럼 사용할 수 있다. 하지만 진짜 배열은 아니다.

1. 함수 안에 arguments.length를 사용해서 배열처럼 사용한다.
2. arguments[i] index값을 전달할 수 있다.
```
