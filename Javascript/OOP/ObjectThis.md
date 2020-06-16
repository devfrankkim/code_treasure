# What is Object? and "this"?

```
서로 연관된 변수와, 함수를 그룹핑해서 이름을 붙인 것.

'this' is myself
```

```js
var kim = {
  name: "kim",
  firstScore: 10,
  secondScore: 20,
  sum: function(first, second) {
    return first + second;
  }
};
console.log(kim.sum(kim.firstScore, kim.secondScore)); // 30
```

```js
// kim은 내부적으로 자신의 점수를 알고 있는데 또 한번 자신을 언급한다.
// argumente들을 생략하고 싶다.

var kim = {
  name: "kim",
  firstScore: 10,
  secondScore: 20,
  sum: function() {
    return kim.firstScore + kim.secondScore;
  }
};
console.log(kim.sum());
```

```js
// 유연성이 떨어진다 ex) 변수를 다르게 바꾸면 동작할까?
// 논리적으로 생각을 해봐도, 함수가 자기가 속해있는 객체가 어떤 이름을 가지게 될지 예상하는 건 불가능.
var andrea = {
  name: "kim",
  firstScore: 10,
  secondScore: 20,
  sum: function() {
    return kim.firstScore + kim.secondScore;
  }
};
console.log(kim.sum());
```

```js
// 이러한 경우 때문에, OOP를 만든 사람들은 어떠한 method가 있으면,
// 그 method가 자신이 속해있는 객체를 가르키는 특수한 키워드로 약속했다.
// ex) "myself", "me", "I"
var andrea = (kim = {
  name: "kim",
  firstScore: 10,
  secondScore: 20,
  sum: function() {
    return kim.firstScore + kim.secondScore;
  }
});
console.log(kim.sum());
console.log(andrea === kim); // true
```

```js
// this는 자기 자신이 속해있는, method가 속해있는 => 객체를 가르키도록 약속한 특수한 예약어.
// this는 깔끔하다.
var THIS = {
  name: "kim",
  firstScore: 10,
  secondScore: 20,
  sum: function() {
    return this.firstScore + this.secondScore;
  }
};
console.log(THIS.sum());
```
