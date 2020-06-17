# What is prototpye(share)?

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
