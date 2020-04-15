# Class

[Blog refrence](https://blog.logrocket.com/javascript-es6-5-new-abstractions-to-improve-your-code-54a369e82407/)

### 정적 메서드(static)는 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화가 되면 호출 할 수 없다.

Classes are one feature that some JavaScript developers have always wanted for a long while, especially those that had prior experience with other object-oriented programming languages. JavaScript ES6 syntax enhancements finally included classes.

Prior to ES6, classes were simulated using _constructor functions_ and instance methods were basically created by enhancing the _constructor function’s prototype._

Hence, when the constructor function is called with the new keyword,
it returns an instance of the constructor type that has access to all of the methods in its prototype. The value of _"this"_ points to the constructor instance.

```js
// The Rectangle constructor
function Rectangle(length, breadth) {
  this.length = length || 10;
  this.breadth = breadth || 10;
}

// An instance method
Rectangle.prototype.computeArea = function() {
  return this.length * this.breadth;
};

// Create an instance using the new keyword
var rectangle = new Rectangle(50, 20);

console.log(rectangle.computeArea()); // 1000

// rectangle is also an instance of Object
// Due to JavaScript's prototypal inheritance
console.log(rectangle instanceof Rectangle); // true
console.log(rectangle instanceof Object); // true
```

# Class Syntax

Classes are similar to functions in so many ways.
Just as with functions,
classes can be defined using class declarations
and class expressions using the class keyword.

_As with functions, classes are first-hand citizens and can be passed around as values around your program._

# However, there are a couple of significant differences between classes and functions.

1. Class declarations are not hoisted and behave like let declarations.
2. Class constructors must always be called with new
3. while the class methods cannot be called with new.
4. Class definition code is always in strict mode.
5. All class methods are non-enumerable.
6. A class name cannot be modified from within the class.
7. whenever the typeof operator is used on a class, it returns “function" whether a constructor is explicitly defined for the class or not.

8.

```js
class Rectangle {
  // The class constructor
  constructor(length, breadth) {
    this.length = length || 10;
    this.breadth = breadth || 10;
  }

  // An instance method
  computeArea() {
    return this.length * this.breadth;
  }
}

// Create an instance using the new keyword
const rectangle = new Rectangle(50, 20);

console.log(rectangle.computeArea()); // 1000

// rectangle is also an instance of Object
// Due to JavaScript's prototypal inheritance
console.log(rectangle instanceof Rectangle); // true
console.log(rectangle instanceof Object); // true

console.log(typeof Rectangle); // function
console.log(typeof Rectangle.prototype.computeArea); // function
```

_Also notice that the computeArea() instance method is actually added to the prototype object of the underlying class constructor function._

_That is the reason why using the typeof operator on Rectangle.prototype.computeArea returns “function” as well._

### Let’s see another example that is slightly more involved to demonstrate using class expressions and passing classes as arguments to functions.

```js
// An anonymous class expression
// assigned to a variable
const Rectangle = class {
  // The class constructor
  constructor(length, breadth) {
    this.length = length || 10;
    this.breadth = breadth || 10;
  }

  // An instance method
  computeArea() {
    return this.length * this.breadth;
  }
};

// A class passed as argument to a function
// Notice how the class is instantiated with new
const computeArea = (Shape, ...dimensions) => {
  return new Shape(...dimensions).computeArea();
};

console.log(computeArea(Rectangle, 50, 20)); // 1000
```

1. Here, we first created an anonymous class expression and assigned it to the Rectangle variable.

2. Next, we created a function that accepts a Shape class as first argument and the dimensions for instantiating the Shape as the remaining arguments.

## Extending Classes

Let’s say we have a Rectangle class for creating rectangles and we want to create a Square class for creating rectangles with equal length and breadth (squares). Here is how we can do it:

```js
class Rectangle {
  constructor(length, breadth) {
    this.length = length || 10;
    this.breadth = breadth || 10;
  }

  computeArea() {
    return this.length * this.breadth;
  }
}

// The Square class extends the Rectangle class
class Square extends Rectangle {
  constructor(length) {
    // super() calls the constructor of the parent class
    super(length, length);
  }
}

const square = new Square();

// Square inherits the methods and properties of Rectangle
console.log(square.length); // 10
console.log(square.breadth); // 10
console.log(square.computeArea()); // 100

// square is also an instance of Rectangle
console.log(square instanceof Square); // true
console.log(square instanceof Rectangle); // true
```

_The derived class inherits all the properties and methods in the prototype of the parent class including the constructor._

````js
// The Square class extends the Rectangle class
class Square extends Rectangle {

constructor(length) {
    // super() calls the constructor of the parent class
    super(length, length);
  }```
}
````

_Also notice that we use a super reference to invoke the constructor of the parent class from within the constructor of the derived class._

_. This is very useful when you want to enhance the functionality of an inherited method in the derived class._

### A call to "super()" must be made in the constructor of every derived class and it must come before any reference is made to "this".

- 'this'를 쓰기 전에 child 클래스 Constructor안에서 super()를 불러야 한다.
- This is because calling "super()" sets the value of "this"
- However, super() should never be used in a class that is not a derived class as it is considered a syntax error
-

### Creating derived classes is not limited to extending classes alone. Derived classes are generally created by extending any JavaScript expression that can be used as a constructor and also has a prototype — such as JavaScript functions. Hence the following is possible:

_자식 클래스는, 부모 methods and properties를 사용 할 수 있다._

```js
function Person(name) {
  this.name = name || "Glad Chinda";
}

Person.prototype.getGender = function() {
  return this.gender;
};

class Male extends Person {
  constructor(name) {
    super(name);
    this.gender = "MALE";
  }
}

const me = new Male();

// Male inherits the methods and properties of Person
console.log(me.getGender()); // "MALE"

// me is also an instance of Person
console.log(me instanceof Male); // true
console.log(me instanceof Person); // true
```

### The static keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself. These are often utility functions, such as functions to create or clone objects.

In order to call a static method within another static method of the same class, you can use the this keyword.

```js
class StaticMethodCall {
  static staticMethod() {
    return "Static method has been called";
  }
  static anotherStaticMethod() {
    return this.staticMethod() + " from another static method";
  }
}
StaticMethodCall.staticMethod();
// 'Static method has been called'

StaticMethodCall.anotherStaticMethod();
// 'Static method has been called from another static method'
```

### Static methods are not directly accessible using the this keyword from non-static methods. You need to call them using the class name: CLASSNAME.STATIC_METHOD_NAME() or by calling the method as a property of the constructor: this.constructor.STATIC_METHOD_NAME().

STATIC(freedom) - this.CONTSTRUCTOR(no freedom) unless you use it as a property ex)constructor: this.constructor.STATIC_METHOD();

STATIC(자유로움)은 인스턴스화를 좋아하지 않는다.
static이 있으면, constructor를 프로퍼티로 사용해야 한다.
ex)

```
class Triple {
  static triple(n) {
    n = n || 1;
    return n * 3;
  }
}

class BiggerTriple extends Triple {
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}

console.log(Triple.triple());        // 3
console.log(Triple.triple(6));       // 18
var tp = new Triple();
console.log(BiggerTriple.triple(3));
// 81 (부모의 인스턴스에 영향을 받지 않는다. not affected by parent's instantiation)
console.log(tp.triple());
// 'tp.triple은 함수가 아니다.' 'tp.triple is not a function'.
console.log(tp.constructor.triple(4)); // 12

```

### 정적 프로퍼티와 메서드는 상속됩니다.(정적 프로퍼티와 메서드 상속)

```js
class Animal {
  static planet = "지구";

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    alert(`${this.name}가 속도 ${this.speed}로 달립니다.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}

// Animal을 상속받음
class Rabbit extends Animal {
  hide() {
    alert(`${this.name}가 숨었습니다!`);
  }
}

let rabbits = [new Rabbit("흰 토끼", 10), new Rabbit("검은 토끼", 5)];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // 검은 토끼가 속도 5로 달립니다.

alert(Rabbit.planet); // 지구
```

이제 Rabbit.compare을 호출하면 Animal.compare가 호출됩니다.
이게 가능한 이유는 프로토타입 때문입니다.
이미 예상하셨겠지만, extends 키워드는 Rabbit의 [[Prototype]]이 Animal을 참조하도록 해줍니다.
[prototype class,static Reference](https://ko.javascript.info/static-properties-methods#ref-358)

따라서 Rabbit extends Animal은 두 개의 [[Prototype]] 참조를 만들어 냅니다.

1. 함수 Rabbit은 프로토타입을 통해 함수 Animal을 상속받습니다.
2. Rabbit.prototype은 프로토타입을 통해 Animal.prototype을 상속받습니다.

## Summary

1. 정적 메서드는 특정 클래스 인스턴스가 아닌 클래스 '전체’에 필요한 기능을 만들 때 사용할 수 있습니다.
2. static 안에서 new 를 만들어서 constructor를 비교해서 사용할 수 있다.
   ex)

```js
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createTodays() {
    // this =>  Article입니다.
    return new this("Today's title", new Date());
  }
}

let article = Article.createTodays();

alert(article.title); // Today's digest
alert(article.date); // Today's date
```

3. 정적 메서드는 클래스 선언부 안에 위치하고 앞에 static이라는 키워드가 붙습니다.
4. 정적 프로퍼티는 데이터를 클래스 수준에 저장하고 싶을 때 사용합니다. 정적 프로퍼티 역시 개별 인스턴스에 묶이지 않습니다.

```js
class MyClass {
  static property = ...;

  static method() {
    ...
  }
}
```

5. static을 사용한 선언은 기술적으론 클래스 자체에 직접 할당하는 것과 동일합니다.

```js
MyClass.property = ...
MyClass.method = ...
```

6. 정적 프로퍼티와 정적 메서드는 상속이 가능합니다.

### class B extends A는 => 클래스 B의 프로토타입이 클래스 A를 참조(포인팅) 합니다.

### (B.[[Prototype]] = A). 따라서 B에서 원하는 프로퍼티나 메서드를 찾지 못하면 A로 검색이 이어집니다.

## Static Class Members

So far we have been looking at instance methods and properties. There are times when you require _static_ methods or _properties_ that apply directly to the class and don’t change from one instance to another. Prior to ES6, static members can be added as follows:

```js
function Lion() {
  // constructor function
}

// Static property
Lion.category = "ANIMAL";

// Static method
Lion.animalType = function() {
  return "CAT";
};

console.log(Lion.category); // "ANIMAL"
console.log(Lion.animalType()); // "CAT"
```

Static class members are also inherited by derived classes. They can be overridden by the derived class in much the same way as instance methods and properties.

```js
class Lion {
  // Static method
  static animalType() {
    return "CAT";
  }
}

// Static property
Lion.category = "ANIMAL";

// Derived Lioness class
class Lioness extends Lion {
  // Override static method
  static animalType() {
    return `${super.animalType()}::LION`;
  }
}

console.log(Lioness.category); // "ANIMAL"
console.log(Lioness.animalType()); // "CAT::LION"
```

### GET & SET

```js
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname || "Glad";
    this.lastname = lastname || "Chinda";
  }

  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  set fullname(value) {
    const [firstname, lastname] = value.split(" ");
    if (firstname) this.firstname = firstname;
    if (lastname) this.lastname = lastname;
  }
}

const me = new Person();
console.log(me.fullname); // "Glad Chinda"

me.fullname = "Jamie";
console.log(me.fullname); // "Jamie Chinda"

me.fullname = "John Doe (Junior)";
console.log(me.fullname); // "John Doe"
```
