## 스코프

- 정의한 변수나 함수를 살피기 위한 범위.
- 함수, 블록(중괄호) 단위로 스코프가 생성됨.

### 블록 스코프

```js
if (true) {
  const hello = "hello";
  console.log(hello);
}

console.log(hello); // Uncaught ReferenceError: hello is not defined
```

### 함수 스코프

```js
var world = 0;

if (true) {
  world = 1234;
  console.log(world); // 1234
}

console.log(world); //1234
```
