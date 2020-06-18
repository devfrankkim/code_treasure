# What is "super"?

제일 먼저 보이는건 그 기능의 장점. 
기능을 도입할 때마다, 눈에 보이지 않는 대가 => 복잡성.

서브(자식) 클래스에서 상위 클래스를 호출할 때 사용하는 super 키워드.

```js
class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
    console.log(`automatically called with "new" key word`);
  }
  sum() {
    return this.first + this.second;
  }

}
```
```js
class PersonPlus extends Person {
  constructor(name, first, second, third) {
    super(name, first, second);
    // this.second = third;
    this.third = third;
    console.log(`PersonPlus constructor`);
  }
  sum() {
    return super.sum() + this.third; // 부모 클래스를 통해서 부른다.
  }

  avg() {
    return (super.sum() + this.third) / 3;
  }
}

// 객체가 생성될 때, super()로 인해서, 부모 constructor실행 => 자식 constructor실행
// "automatically called with "new" key word"
// "PersonPlus constructor"
var kim = new PersonPlus("kim", 100, 200, 300);



console.log(kim.sum()); // 600
console.log(kim.avg()); // 200
```

### summary
``` 
전체 전부 긁어 오면, 상속할 필요가 없다.
부모 클래스를 불러서, 부모클래스한테 일을 시키고, 부모가 하지 못하는 일은 나만 한다.
=> super (부모가 가지고 있는 기능을 실행할 수 있다.)

공통적인 초기 세팅을 부모한테서 불러온 후, super() +  자신만의 세팅을 한다.


super() 키워드는 두가지 방법이 있다.
1) super(name, first, second) 부모 클래스의 생성자 호출.

생성자 안에서 property들이 세팅이 되기 때문에, 자식은 자신 것만 챙긴다.


super() 

super 두가지.
괄호 => 괄호가 있으면, super() 부모 constructor를 불러서 초기 세팅을 사용할 수 있다.
괄호 없으면  => super.sum() => 부모의 property들을 객체 처럼 사용할 수 있다.
super가 없다면 무슨 불편함이 있고 => super가 없다면, 1억개의 중복 코드가 생길 수 있다. 
super가 있다면 어떤 편리함을 얻게 되는지 => 중복 코드를 줄일 수 있다.

super()시 부모 클래스의 생성자 호출. 세팅에 필요한 argument를 넘겨줘야함.
super. 사용시 부모 클래스의 속성값에 접근 가능하다.

상속으로 생기는 어떤 단점을 어떻게 보완할 수 있는가? => 
새로운 세팅을 원하고, 새로운 값을 원할 때, 부모 클래스 + 자신 클래스에 세팅을 추가할 수 있다.

```
**(super(), 부모 constructor) => 부모가 가지고 있는 기능을 실행할 수 있기 때문이다.**


```js
var kim = new PersonPlus('kim', 10, 20)

// 새로운 argument들을 초기 세팅에 추가하고 싶다.
var kim = new PersonPlus('kim', 10, 20, 30)
```