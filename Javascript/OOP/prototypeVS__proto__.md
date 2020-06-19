# prototype VS __proto__ => function is an Object in JavaScript

함수란 무엇인가?       
자바스크립트에서 만큼은 아주 독특하다. statements처럼 보이지만, 사실 객체다.

```js
var Person = new Function('number', 'return number * number')

console.log(Person(10))

function Person(number){
return number*number;
}
console.log(Person(10))
```
즉, 함수는 자바스크립트에서 객체다.       
자바스크립트들의 함수들은 객체이기 때문에, property들을 가질 수 있다.

```js
function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}
// 새로운 객체가 생성된다. Person
// 객체가 하나 더 생긴다. => Person's prototype 객체가 생긴다.

// 두개의 객체는 연관되어 있고 관련되어서 서로 알아야 한다.

// Person이라는 객체는 prototype이라는 property가 생기고, 
// 그 property는 => Person의 prototype 객체를 가르킨다.

```
```
Person {prototype}  => Person prototype Object
Person.prototype => Person prototype Object

Person {prototype}도 자신이 Person 소속이라는 것을 표시하기 위해서 어딘가에 기록해놔야 된다.

그래서 prototype(Person's prototype Object)는 constructor라는 property를 만들고
=> 그 property(constructor)는  => Person을 가르키게 된다.

Person은 prototype 프로퍼티를 통해서 <=> Person의 prototype 객체는 constructor라고 하는 프로퍼티를 통해서
```
```js
// ex)
 var date = new Date();    
 Date.prototype => prototype Object {constructor} => Date() 
 date.constructor // Date();
 date.__proto__ // Date.prototype => Date's prototype Object ex) constructor, getDate, getDay
```


```js
function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.sum = function(){}

var kim = new Person('kim', 10, 20); // kim { __proto__ , name , first , name}
// __proto__는 누구를 가르키도록 자바스크립트가 조치를 할까? kim 객체를 생성한 Person의 prototype을 가르킨다.
// __proto__ => Person's prototype Object (prototype)
// person.prototype 통해서 Person's prototype Object를 접근할 수 있다.
// kim.__proto__를 통해서 Person's prototype Object를 접근 할 수 있다.


var lee = new Person('kim', 10, 20); 



// Person {prototype}
// Person's prototype {constructor, sum}

// 그러면 우리가 객체를 찍어내는 공장인 Person이라고 하는 constructor 라고 하는 function을 만든다.
 
```

1. 자기 자신의 프로퍼티먼저 찾는다.
2. 자신의 프로퍼티가 없으면 __proto__를 통해서 => prototype Object에서 프로퍼티를 찾는다.


```
어떤 객체가 있는데,
그 객체가 자체적으로 가지고 있지 않은 어떤 값을 사용하려고 할 때,
어떤 데이터를 근거로 해서 어디에서 객체가 가지고 있지 않은 ex) sum을 찾아내는가

Person.prototype

Person.prototype vs kim.__proto__
```
