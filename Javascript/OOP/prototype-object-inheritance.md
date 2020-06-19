## prototype-inheritance object (class & Object)

###  __proto__ 다른 객체의 자식이 된다. 꼭 좋은 것만은 아니고, 사고가 날 수 있고 복잡성이 있을 수 있다.



JavaScript는 객체(인스턴스)와 객체 간의 상속 관계를 자유롭게 설정할 수 있다.


객체 지향 프로그램은  2가지 요소
1. 객체를 만들어 내는 공장 => class (설계도) factory
2. 그 class를 통해 만들어진 구체적인 객체 => object(instance)

```
자바와 자바스크립트가 다르다.
prototype based language => JS

상속을 어떻게 다루나?

sub class - super class
자식 => object생성


객체가 다른 객체에 상속을 받는다던지 이런것들은 불가능
object들은 태어나면 자기가 어떤 기능을 갖게 되는지 결정되어 있다.

자바스크립트는 어떻게 상속하나?

super object

기능을 추가 하고 싶을때

sub object => 기능을 직접 상속 받을 수 있다. 
*자바스크립트는 객체가 직접 다른객체의 상속을 받을 수 있고,
얼마든지 상속 관계를 바꿀 수 있다.

링크만 바꿔주면된다.
prototype link
prototype link가 가르키고 있는 객체를 prototype object
```


 ### 자바스크립트 상속

 ```js
var superObject = {superValue: 'super'}
var subObject = {subValue: 'sub'}
 ```

  ```js
var superObject = {superValue: 'super'}
var subObject = {subValue: 'sub'}

// what is prototype of subObj? where's the link?
// Linking the child to the parent using '__proto__'
subObject.__proto__ = superObject;
console.log(subObject); // {subValue: 'sub'}
console.log(subObject.superValue); // 'super'

// 1) subObject는 superValue라는 property 자기 자신 안에서 찾는다.
// 2) 없으면, __proto__로 연결시킨 parent에서 찾고 쓴다.

console.log('subObject.superVal =>', subObject.superValue); // 'super'
subObject.superValue = 'sub';
console.log('superObject.superVal =>', superObject.superValue); // 'super'
console.log('subObject.superVal =>', subObject.superValue); // 'sub'

 ```

### __proto__ 대체체 => Object.create()



```js
var superObject = {superValue: 'super'}
var subObject = Object.create(superObject);
subObject.subvalue = 'sub' // 'sub'
debugger; // 객체의 상태를 자세히 볼 수 있다.


console.log(subObject); // {subvalue: "sub"}
```



### Object.create() , __proto__


```js
var kim = {
    name: 'kim', 
    first: 20, 
    second: 20,
    sum: function() {
        return this.first + this.second
    }
}

var lee = Object.create(kim)


// var lee = {
//     name: 'lee',
//     first: 10,
//     second: 10,
//     avg:function(){
//         return (this.first + this.second) / 2
//     }
// }

console.log(kim.sum()); // 40
console.log(lee.avg()); // 10

// lee.__proto__ = kim
// console.log(lee.sum()) // 20

```

### 자바스크립트는에서 함수는 혼자 있으면 개인이고, new가 앞에 있으면 객체를 만드는 신이고, call을 뒤에 붙이면 용병이고, bind를 붙이면 분신술을 부리는 놀라운 존재. 자바스크립트의 함수의 놀라움.

