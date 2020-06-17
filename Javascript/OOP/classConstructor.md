# What is Class? and class constructor?

### constructor inside "class" => new 객체가 생성될 때, 자동으로 객체가 생성되기 전에 실행되도록 약속되어 있다. for 초기 상태

### 객체를 만드는 공장 => Class

### constructor function을 통해서 객체를 찍어냈다.

[prototype 프로토타입]

1. 함수
2. new 함수는 객체를 리턴한다.
3. property(속성)이 기본적으로 세팅이 된 객체가 리턴된다.

[class 클래스]

1. new 키워드가 객체를 생성한다.
2. 함수에 function을 쓸 수 없고, 정의하는 역할로 사용된다.
3. 초기값 세팅을 위해 객체가 생성되기전, constructor 자동으로 호출된다.
4. 객체 생성 완성

## what does constructor(new) do? 1) 객체를 만든다. 2) 객체의 초기 상태를 세팅한다.

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

### 객체를 만드는 공장 => Class

```js
//Class

class Person {
  // 생성되는 객체를 어떻게 초기화 하는가? is it different prototype(f)?
  // you don't use "function" for method inside "Class"
  constructor() {}

  sum() {}
}

var kim = new Person();
```

##

**어떠한 객체가 생성될 때, 객체 초기 상태를 지정하기 위한,**
**객체가 만들어지기 직전에 실행되도록 약속 되어진 함수가 있다.**

그 함수를 지정해야 한다.

그 함수의 이름은 => constructor(){}
반드시 constructor라는 이름을 사용해야 한다. 약속어다.

자바스크립트는 객체를 생성할 때, constructor 함수를 자동으로 호출한다.

```js
class Person {
  constructor() {
    console.log("bullshit");
  }
}

var kim = new Person(); // "bullshit"
//객체가 생성되는 과정에서 => constructor가 자동 실행 되었다.
```

```js
class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
    console.log(`automatically called with "new" key word`);
  }
}

var kim = new Person("kim", 100, 200); // "bullshit"
//객체가 생성되는 과정에서 => constructor가 자동 실행 되었다.

console.log(kim); // Person {name: "kim", first: 100, second: 200}
```
