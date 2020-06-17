# What is prototype(share)? function? new? constructor? _proto_? object?

JavaScript의 prototype이 필요한 이유와 prototpye을 통해서 코드의 재사용성과
성능을 향상시키는 방법.

1. 프로토타입 의미
   객체들이 공통(SHARE)으로 사용하는 속성값

2. 프로토타입 없을 때의 비효율적인 점
   객체를 생성할 때 마다 같은 동작을 하는 메소드가 메모리에 계속 생긴다. => 성능 저하, 메모리 낭비

3. 프로토타입을 사용하면 좋은 점
   객체들이 공통으로 사용하는 속성값을 정의해서 객체 생성마다 같은 속성값을 만드는 과정을 생략해, 성능 향상과 메모리를 효율적으로 이용할 수 있게 해준다.

### 불만족

```js
function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;

  // 거슬린다.
  this.sum = function() {
    return this.first + this.second + this.third;
  };
}

var kim = new Person("Kim", 100, 200, 300);
var lee = new Person("Lee", 10, 10, 10);

console.log(kim === lee); // false
```

생성자가 실행 될 때 마다
우리가 생성하려고 하는 객체에
sum이라는 이름에 함수가 생성 될 때 마다
새로 만들어지고 있다.

=> 컴퓨터 메모리 낭비된다.

1억개의 객체를 생성할 때마다 똑같은 함수를 생성하는 시간이 또 든다.
생성하는데 메모리가 사용되고 성능을 저하시키는 요소가 된다.

```js
// 함수 바꾸기
kim.sum = function() {
  return "modified : " + (this.first + this.seoncond);
};
/*
이러면 괜찮은데 Person이라는 객체를, 생성자를
사용하는 모든 객체에 sum이라는 함수를 모두 다 바꾸고 싶다.
그렇다면, 이러한 똑같은 작업을 1억번 또 해야한다.
*/

kim.sum = function() {
  return "modified : " + (this.first + this.seoncond);
};

kim.lee = function() {
  return "modified : " + (this.first + this.seoncond);
};
// 1억번 바꾸려면.. 할만한가???!!! NO
생성자 안에서 메소드를 만드는 것이 가지고 있는 단점이다. 생산성이 많이 떨어진다.

// 무엇을 꿈꾸나.
생성자를 사용해서 만든 모든 객체가 공통적으로 사용하는 함수를 만들 수 있으면 얼마나 좋을까?
또한, 속성을 만들 수 있으면 얼마나 좋을까?

```

생성자를 통해서 만든 객체 모두 공통적으로 사용하는 속성을 만드는 방법
함수 안에서 할 수 가 없으니, 밖으로 빼낸다.

```js
function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
}

// 거슬린다.
// Person이라고 하는 생성자 함수에 prototype. 즉, prototype을 정한다.
Person.prototype.sum = function() {
  return 'prototype: ' + (this.first + this.second + this.third);
};

var kim = new Person("Kim", 100, 200, 300);
var lee = new Person("Lee", 10, 10, 10);

console.log(kim.sum()); // 600
console.log(lee.sum()); // 30

# 차이점

생성자 함수 안에 정의 하는 것이 들어가 있지 않기 때문에,
정의 하는 코드가 객체가 만들어질 때마다 실행되지 않는다. 한번만 실행되고, 성능 효과, 메모리 절약

ex) 1억개 객체가 만들어질 때마다, 메소드를 실행하지 않고 필요할 때만 부를 수 있다.
```

ex) 1억개 객체 중 kim변수가 가르키는 객체에 sum 메서드를 다르게 동작하게 하고 싶다.

prototype으로 만든 공통적인 method는 개인적인 튜닝이 가능하다.

```js
function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
}

Person.prototype.sum = function() {
  return "prototype: " + (this.first + this.second + this.third);
};

kim.sum = function() {
  return "this : " + this.first + this.second;
};

var kim = new Person("Kim", 100, 200, 300);
var lee = new Person("Lee", 10, 10, 10);
```

### prototype.method 특징

1. 가장 첫번 째로, 자기 자신의 속성 property(method)를 먼저 찾는다. ex) kim.sum = function()
2. 자기 자신의 속성 property(method)를 찾지 못하면, 생성자의 prototype 속성 property(method)을 찾고 거기서 실행시킨다.

**kim이라고 하는 객체가, sum이라는 메서드를 호출 할 때 kim.sum(), 제일 먼저 그 객체 자신이(kim) sum이라고 하는 속성을 가지고 있는지를 찾는다. 있으면 거기서 딱 끝낸다.**

**lee는 sum이라고 하는 method를 정의 한적이 없다. 그러면 자바스크립트는 우리가 찾는 sum이 자신이 가지고 있지 않으면 객체 생성자인 prototype.sum 이 정의 되어 있는지를 찾는다. prototype을 찾으면 실행시킨다.**

```js
kim.sum = function() {
  return "found the property for kim.sum";
};
```

속성들은(데이터 변수) 생성자 안에 넣는다.
다른 속성들도 prototype을 사용할 수 있다.
함수는 특별한 이유가 있지 않다면, prototype.method 를 실행시킨다.

1. prototype 어떤 의미가 있나?

=> 객체들이 공통으로 사용하는 속성값

2. 우리가 prototype을 사용하지 않고 생성자 함수 안에서 메서드나 속성을 직접 정의하게 되면 어떤 비효율이 발생하는지?

=> prototype을 굳이 사용하지 않아도 되지만, new 생성자를 사용해서 1억개의 객체를 만들고 부를 때마다 1억번 똑같은 메서드가 불려서 메모리, 성능에 좋지 않다.

3. 그리고 어떻게 극복해야 하나?

=> 생성자 함수 밖으로 빼내서 Object.prototype.method = function(){}을 사용하여
필요할때만 부를 수 있도록 한다.

=> 자바스크립트는 제일 먼저 자기 자신의 property(method)를 찾고 실행시킨다. 자기 자신의 property(method)를 찾지 못하는 경우, 생성자 함수로 이동하여 prototype.method를 찾은 후 실행시킨다.

```js
// Object.method
var cal = {
  first: 10,
  second: 20,
  third: 30,
  sum: function() {
    return this.first + this.second + this.third;
  }
};

//constructor
function Cal(f, s, t) {
  this.first = f;
  this.second = s;
  this.third = t;
  this.sum = function() {
    return this.first + this.second + this.third;
  };
}

console.log(cal.sum()); //60
console.log(new Cal(100, 100, 100).sum()); // 300

// prototype
function Calculate(first, second) {
  this.first = first;
  this.second = second;
}

Calculate.prototype.sum = function() {
  return this.first + this.second;
};
Calculate.prototype.substract = function() {
  return this.first - this.second;
};

console.log(new Calculate(300, 300).sum()); // 600
console.log(new Calculate(300, 300).substract()); // 0

// 1. Get the constructor and variable
// 2. Add property(method) for the variable

var kim = new Calculate(100, 100); // Calculate {first: 100, second: 100}
var lee = new Calculate(100, 100); // Calculate {first: 100, second: 100}

kim.sum = function() {
  return "No prototype. This is from property : " + (this.first - this.second);
};

kim.multiply = function() {
  return this.first * this.second;
};

lee.divide = function() {
  return this.first / this.second;
};

console.log(kim.sum()); // 0 => property
console.log(lee.sum()); // 200 => prototype
console.log(kim.multiply()); // 10000
console.log(lee.divide()); // 1
```

# Prototype link & Prototype object

Prototype Object
객체는 언제나 함수(Function)로 생성된다.

```js
function Person() {} // => 함수
var personObject = new Person(); // => 함수로 객체를 생성
```

personObject 객체는 Person이라는 함수로 생성된 객체다.
이렇듯 언제나 객체는 함수에서 시작된다.
많이 쓰는 일반적인 객체 생성도 예외는 아니다.

```js
var obj = {};
```

얼핏보면 함수랑 전혀 상관없는 코드로 보이지만 위 코드는 사실 다음 코드와 같다.

```js
// var obj = {};
var obj = new Object();
```

위 코드에서 Object가 자바스크립트에서 기본적(native)으로 제공하는 함수다.

```js
//  Object도 함수다!!
Object  => ƒ Object() { [native code] }
```

**Object, Function, Array도 모두 함수로 정의되어 있다. 이것이 첫 번째 포인트다.**

그렇다면 이것이 Prototype Object랑 무슨 상관이있느냐?
함수가 정의될 때는 2가지 일이 동시에 이루어진다.

1. 해당 함수에!!! Constructor(생성자) 자격 부여

함수에 Constructor 자격이 부여되면 new를 통해 => 객체를 만들어 낼 수 있게 된다.
이것이 함수만 new 키워드를 사용할 수 있는 이유다.

constructor가 아니면 new를 사용할 수 없다.

ex)

```js
var obj = {};
var a = new obj(); // obj is not a constructor.
```

2. 해당 함수의 Prototype Object 생성 및 연결

함수를 정의하면 함수만 생성되는 것이 아니라, Prototype Object도 같이 생성이 된다.

```js
function Person(){} // 2가지 생성

// 1
function Person(){} // prototype

// 2
Person Prototype Object // constructor, __proto__

// 1, 2 연결하기
function Person(){} <=>  constructor(Person Prototype Object)
function Person(){} (prototype) <=> Person Prototype Object


```

그리고 생성된 함수는 prototype이라는 속성(property) 통해 => Prototype Object에 접근할 수 있다.

Prototype Object는 일반적인 객체와 같으며 기본적인 속성으로,
constructor와 "--proto--"를 가지고 있다.

**함수에는 prototype이 속성이 생긴다.**
**prototype안에는 constructor와 --proto-- 가 존재한다**

```js
function Person() {} // undefined => no return

Person.prototype;
// {constructor: ƒ}, constructor:f Person(), __proto__: Object
```

1. 함수 생성
2. 함수에 constructor 부여하기
3. 함수에 Prototype Object 생성 및 연결하기
4. 생성된 함수에는, prototype이라는 속성이 존재해서 Prototype Object에 접근할 수 있다.
5. Prototype Object는 일반적인 객체와 같으며 기본적인 속성으로 constructor, proto를 가지고 있다.

constructor는 Prototype Object와 같이 생성되었던 함수를 가리키고 있다.
**proto**는 Prototype Link다.

ex)

```js
function Person() {}
Person.prototype.eyes = 2;
Person.prototype.nose = 1;

var kim = new Person();
var park = new Person();

console.log(kim.eyes); // => 2
Person.prototype; //  {eyes: 2, nose: 1, constructor: ƒ}
```

Prototype Object는 일반적인 객체이므로 속성을 자유롭게 추가/삭제 할 수 있다.
kim과 park은 Person 함수를 통해 생성되었으니, Person.prototype을 참조할 수 있게 된다.

1. Prototype Link를 보기 전에 Prototype Object를 어느 정도 이해해야 한다.
2. 함수가 정의될 때 이루어지는 일들을 이해하는 것이 두 번째 포인트,
3. Prototype Object를 이해하는 것이 세 번째 포인트

### Prototype Link => The lord of the rings (_proto_)

```js
kim; // Person {} => proto: Object
kim.eyes; // 2
```

kim에는 eyes라는 속성이 없는데도 kim.eyes를 실행하면 2라는 값을 참조하는 것을 볼 수 있다.
위에서 설명했듯이 Prototype Object에 존재하는 eyes 속성을 참조한 것이다.

이게 어떻게 가능한걸까??

바로 kim이 가지고 있는 딱 하나의 속성 **proto**가 그것을 가능하게 해주는 열쇠입니다. // lord of rings

prototype 속성은 함수만(Person.prototype) 가지고 있던 것과는 달리,
**proto**속성은 모든 객체가 빠짐없이 가지고 있는 속성이다!!!
ex) kim, park, Person.prototype

**proto**는 객체가 생성될 때 조상이었던 함수의 Prototype Object를 가리킨다.
kim객체는 Person함수로부터 생성되었으니,
Person 함수의 Prototype Object를 가리키고 있는 것이다.

kim => Person 로 부터 생성됨.
따라서 kim => Prototype Object 를 가르키고 있음.

ex)

```js
kim.__proto__; // {eyes: 2, nose: 1, constructor: ƒ}
park.__proto__; // {eyes: 2, nose: 1, constructor: ƒ}
Person.prototype; // {eyes: 2, nose: 1, constructor: ƒ}
```

**proto**를 까보니 역시 Person 함수의 Prototype Object를 가리키고 있다.

### Key point

```js
new Person();

1. kim.__proto__ => Person Prototype Object

  //function Person(){} prototype
2. Person.prototype => Person Prototype Object


Person Prototype Object [
 constructor,
 __proto__,
 eyes,
 nose,
]
```

```js
// kim은 eyes를 가지고 있지 않다.
kim객체가 eyes를 직접 가지고 있지 않기 때문에 => Person{}

// kim은 eyes가 없기 때문에, 상위 prototype을 탐색한다.(Person Prototype Object)
eyes 속성을 찾을 때 까지 상위 프로토타입(Person Prototype Object)을 탐색한다. => kim.eyes(bubbling)

// 만약 최상위, Object에 도달했는데, eyes가 없다면 => "undefined"
최상위인 Object의 Prototype Object까지 도달했는데도 못찾았을 경우 "undefined"를 리턴한다.(bubbling)

// __proto__ 속성을 통해 상위 prototype과 연결되어 있는 형태를 Chain이라고 부른다.
이렇게 __proto__ 속성을 통해 상위 프로토타입과 연결되어있는 형태를 프로토타입 체인(Chain)이라고 한다.
```

### Chain Level, 최상위 => Object

1. kim, function Person(){}
2. Person Prototype Object
3. Object Prototype Object
4. function Object() {}

### 이러한 프로토타입 체인 구조 때문에, 모든 객체는 Object의 자식이라고 불린다.

### 또한, 이러한 구조 때문에, Object Prototype Object에 있는 모든 속성을 사용할 수 있다.

ex) toString

Object 속성인 toString 메서드를, kim, park이 사용 가능하다.

### **proto**와 프로토타입 체인(protoype chain)을 이해하는것이 포인트다.

[good reference medium](https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67)
[nextree prototype](http://www.nextree.co.kr/p7323/)
[insanehong](http://insanehong.kr/post/javascript-prototype/)
[nextree function](http://www.nextree.co.kr/p4150/)
