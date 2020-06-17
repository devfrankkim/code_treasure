# Inheritance

```
상속이 왜 필요한지?
무슨 꿈을 이룰 수 있는지?
공감 하고,
바탕으로 해서 필요할 때 사용해야 한다.

아쉬운점 => 메서드가 부족하다.
평균을 구하고 싶으면?
```

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

  // 1) 메서드 새로 정의하기 => avg() { return (this.first+this.second)/2 }
}

// 2) 새로운 클래스 정의하기.
class PersonPlus {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
    console.log(`automatically called with "new" key word`);
  }
  sum() {
    return this.first + this.second;
  }
  avg() {
    return (this.first + this.second) / 2;
  }
}

var kim = new PersonPlus("kim", 100, 200);

console.log(kim.sum()); // 300
console.log(kim.avg()); // 150
```

### 아쉬움이 생긴다. 중복 제거를 할 수 있다.

```js
class PersonPlus extends Person {
  avg() {
    return (this.first + this.second) / 2;
  }
}

var kim = new PersonPlus("kim", 100, 200);

console.log(kim.sum()); // 300
console.log(kim.avg()); // 150
```

1. 상속이 없으면 뭐가 불편한가?
   중복코드
2. 상속할 때 extends 사용, 그러면 자식 클래스는 어떻게 구현하는지?
