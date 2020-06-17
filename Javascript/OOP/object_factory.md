# constructor

## 함수가 return 하지 않으면 => undefined

## 하지만, new 매직 키워드가 들어가면, 완전히 다른 존재가 된다. => 객체를 생성해버린다.

보통 함수 => 객체를 생성하는 생성자(constructor) 함수

## 함수를 이용해서 객체를 만들때, 만들어진 객체 property들에 해당 "this"가 붙어야 한다. ex) this.name = "frank", this.age = 100

## function-this !== arrow function-this

**객체 공장**
객체를 수동으로 만드는 가내수공업에서 벗어나서
객체를 자동으로 찍어내는 공장인 constructor

### 가내수공업으로 객체를 만들 때의 단점

하나씩 하나씩 만든 느낌이다.

객체를 찍어내는 공장이 있어서
우리가 프로그래밍적으로 그 공장을 짓게 되면,
그 공장을 통해서 객체를 쾅쾅쾅 찍어 낼 수 있는 양산체계를 가질 수 있다.

```js
var kim = {
  name: "kim",
  first: 20,
  second: 20,
  sum: function() {
    return this.first + this.second;
  }
};

var lee = {
  name: "lee",
  first: 10,
  second: 10,
  sum: function() {
    return this.first + this.second;
  }
};

console.log(kim.sum()); // 40
console.log(lee.sum()); // 20
```

하지만 위처럼 하면 아쉬운게 있다.

ex) 객체가 동작하는 방법이 바뀌었다.
수정 작업을 같은 형태 객체 모두에게 적용해야 한다.
만약 여기 있는 객체가 1억개라면? 전부 다 바꿔줄건가?
그리하여, 해결방법은
객체를 찍어내는 공장을 만드는 것이다.
그리고 그 공장을 이용해서 객체를 양산할 것이다.

```js
var kim = {
  name: "kim",
  first: 20,
  second: 20,
  third: 20,
  sum: function() {
    return this.first + this.second + this.third;
  }
};

var lee = {
  name: "lee",
  first: 10,
  second: 10,
  third: 10,
  sum: function() {
    return this.first + this.second + this.third;
  }
};
```

객체를 찍어내는 공장

```js
상태를 가지고 있는 새로운 객체가 만들어져서 d1이 된다. 그 객체가 어떻게 만들어졌는지 알 필요 없다.
설계도를 볼 수가 없다. 하지만, now라는 객체를 사용할 수 있다.
객체를 만들어서 우리한테 리턴을 해주고 있다.

공장을 만든다면, 코드도 깨끗해지고 다르게 생산된다.


var now = new Date("2020-6-15");
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth()); // 0부터 시작한다.
```

### 객체를 만드는 공장 만들기

```js
// 함수를 호출하는 것과 비슷하다. 그것은 Date가 함수기 때문에 그런다.
var now = new Date("2020-6-15");

console.log(Date); // ƒ Date() { [native code] } 내장된 코드다.
```

### 함수를 이용해서 객체를 만들 때, 만들어진 객체의 이름은 "this.name"

```
함수 안에서의 함수
variable = function(){}

객체 정의할 때, 안에서의 함수
variable: function(){}
```

```
new를 사용했더니, 객체가 만들어졌다.
new라는 키워드를 붙이면, 일반적인 함수가 아니다. 객체를 생성하는!! 생성자(constructor)가 된다!!
생성자(constructor)
new가 있으면, => 생성자 함수
```

```js
function Person() {
  this.name = "kim";
  this.first = 20;
  this.second = 20;
  this.third = 20;
  this.sum = function() {
    return this.first + this.second + this.third;
  };
}
console.log("Person()", Person()); // undfined => why? because it's not returning anything.

// new 마법의 키워드 => 완전히 다른 존재가 된다.
console.log("new Person()", new Person()); // Person {name: "kim", first: 20, second: 20, third: 20, sum: ƒ}
```

```js
function Person() {
  this.name = "kim";
  this.first = 20;
  this.second = 20;
  this.third = 20;
  this.sum = function() {
    return this.first + this.second + this.third;
  };
}

var kim = new Person();
var lee = new Person();

// 같은 Person()값을 포인팅 하고 있기 때문.
console.log(kim.sum()); // 60
console.log(lee.sum()); // 60
```

### constructor 함수가 실행될때 입력값을 주입할 수 있다.

```js
function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function() {
    return this.first + this.second + this.third;
  };
}

var kim = new Person("Kim", 100, 200, 300);
var lee = new Person("Lee", 10, 10, 10);

console.log(kim === lee); // false
```

# consturctor를 사용하면 왜 좋은가?

```
더 자율적이다.
1억개의 다른 오브젝트를 똑같은 포맷으로 constructor를 통해 찍어 낼 수 있다.
중괄호를 사용해서 객체를 만들 때 마다, 그 객체를 다시 정의해줘야 된다.
constructor fucntion을 사용할 때 new를 사용함으로써, 실행 할 때마다 객체가 양산된다.
constructor function을 사용해서 만들어진 모든객체가, 한번에 바뀌는 폭발적인 효과를 얻게 된다.
```
