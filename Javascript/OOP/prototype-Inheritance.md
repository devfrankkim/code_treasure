## prototype Inheritance: constructor, __proto__ , prototype Object, Object.create()


### 클래스 상속
 ```js
class Person{
    constructor(name,first,second){

    }
}
 ```

 1. 클래스가 new를 통해서 생성될 때, constructor가 실행된다.

 2. 우리가 생성하려고 하는 객체에 초기값이 세팅된다. inside constructor
 그리고 그 객체는 sum이라고 하는 method를 가지고 있다.

 3. sum은 그 객체의 소속이 아니고, 그 객체에 프로토타입 소속이다.
 Person을 이용해서 생성된 모든 객체가 공유할 수 있는 함수다.

###  prototype, prototype object, constructor,  __proto__  상속
```
자식은 
super() 메서드를 통해서,  
부모 클래스가 가지고 있는 constructor()를 실행하고,
그리고 나머지 부분은 자식클래스에서 별도로 실행한다.
부모의 코드를 재활용한다.
자신만의 작업을 할 수 있다.
   
메서드도 공유해서 다르게 사용할 수 있다.
__proto__로 상위 Objecet와 linking 하면서 오갈수 있다.
__proto__는 기본적으로 항상 Object라고 하는 => 객체의 prototype의 객체(prototype Object)를 가르킨다. 
 
객체이기 때문에 __proto__이 존재한다.
PersonPlus.prototype.__proto__ = Person.prototype;
```
```js
function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.sum = function(){
    return this.first + this.second
}

// PersonPlus.prototype.__proto__ = Person.prototype;

// What is Object.create()? // 새로운 객체가 만들어진다.(__proto__)
PersonPlus.prototype = Object.create(Person.prototype); // kim.constructor => Person. Not "PersonPlus"

// kim.constructor => Person
PersonPlus.prototype.constructor = PersonPlus;

function PersonPlus(name, first, second, third){
    // this에 집중. Person함수 실행
    // 첫번 째 인자로 PersonPlus를 보낸다.
    // in Class => super(name, first, second)
   Person.call(this, name, first, second);
   this.third = third;
}

PersonPlus.prototype.avg = function(){
        return (this.first + this.second + this.third) / 3
}

var kim = new PersonPlus('kim', 1, 2, 3);
kim.sum();
kim.avg();
```

```js
// Person.prototype => Object 가 PersonPlus.prototype.__proto__를 가르킨다.
1. PersonPlus.prototype.__proto__ = Person.prototype;

2. Object.create(Person.prototype)를 하게되면,
새로운 객체로  PersonPlus.prototype을 교체 해버린다. 지워버린다.

PersonPlus.prototype은 PersonPlus를 가르키고 있었을 것이다. 그것을 replace 시켜버린다.
더이상 PersonPlus.prototype은  =>  PersonPlus를 가르키고 있지 않는다.

2. PersonPlus.prototype = Object.create(Person.prototype); 
2. PersonPlus.prototype.constructor = PersonPlus;
```
