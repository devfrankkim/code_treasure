# How to use method in Class

프로토타입

prototype
constructor함수에
prototype이라는 객체에,
sum이라는 property를 함수로 지정함으로써,

똑같은 constructor함수를 통해 만들어진 모든 객체가 공유하는 함수

```js
// prototype

// just a function
function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
}

Person.prototype.sum = function() {
  return "prototype: " + (this.first + this.second + this.third);
};

// with new key word, the function Person returns an Object => constructor
var kim = new Person("Kim", 100, 200, 300);

kim.sum = function() {
  return "this : " + this.first + this.second;
};

var lee = new Person("Lee", 10, 10, 10);
```

========

class

### 1번 째 방법 - prototype.method를 똑같이 밖에다 정의한다.

```js
class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
    console.log(`automatically called with "new" key word`);
  }
}

Person.prototype.sum = function() {
  return "prototype: " + (this.first + this.second);
};

var kim = new Person("kim", 100, 200);
//객체가 생성되는 과정에서 => constructor가 자동 실행 되었다.

console.log(kim); // Person {name: "kim", first: 100, second: 200}
console.log(kim.sum()); // "prototype: 300"
```

### 2번 째 방법, prototype.method => method() 로 class안에서 바로 정의한다.

```js
class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
    console.log(`automatically called with "new" key word`);
  }
  sum() {
    return "prototype: " + (this.first + this.second);
  }
}

var kim = new Person("kim", 100, 200);

console.log(kim); // Person {name: "kim", first: 100, second: 200}
console.log(kim.sum()); // "prototype: 300"

kim.sum = function() {
  return this.first / this.second;
};

console.log(kim.sum()); // 0.5
```

### 새로운 함수를 정의하고 싶으면 똑같이 object.method = function(){} 정의하면됨.

### 1. 객체 자기자신의 property(함수를 먼저 찾는다) 2.없으면 객체가 클래스 안에서 method를 찾는다.
