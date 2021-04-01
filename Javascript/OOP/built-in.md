# Built-in JavaScript => ƒ Date() { [native code] }

```js
Math.PI; // 3.141592653589793
Math.random(); // 0.xxxx1 ~ 0.9xx
Math.floor(3.9); // 3
```

Object (grouping) => Math{PI, random(), floor()}

```js
var MyMath = {
  PI: Math.PI,

  // functions
  random: function() {
    return Math.random();
  },
  floor: function(value) {
    return Math.floor(value);
  }
};

console.log(MyMath.PI); // 3.141592653589793
console.log(MyMath.random()); // random value
console.log(MyMath.floor(1.9999999)); // 1
```

함수만 말하면 => function  
function이 객체에 소속 되어 있을 때 => method  
객체라고 하는 것은  
서로 연관된 변수와 함수들을 객체로 그룹화해서 이름을 붙인것이다.

```js
// Be careful when you make variables
let MyMath_PI = Math.PI;
function MyMath_random() {
  return Math.random();
}

function MyMath_floor(value) {
  return Math.floor(value);
}
```
