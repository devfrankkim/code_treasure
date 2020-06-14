# What is "this"?

[reference](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)

```
대부분의 경우,
this 의 값은 함수를 호출하는 방법에 의해 결정된다.

선언, 호출

선언 => 클로저 선언된 위치
호출 => this 호출하는 방법

ES5는 this값이 함수가 어떻게 호출되었는지 개의치 않고 설정할 수 있는 bind를 소개했다.
호출되는 방법과 무관하게 this를 묶어버릴수 있다. this를 고정시켜버린다. => bind

호출하는 방법이 중요하다!!!
```

```js
var someone = {
  name: "frankkim",
  whoAmI: function() {
    console.log(this);
  }
};

someone.whoAmI(); // {name: "frankkim", whoAmI: ƒ}

var myWhoAmI = someone.whoAmI;
myWhoAmI(); // Window

// myWhoAmI() 글로벌에 있고,
// 글로벌은 window의 객체.

var btn = document.getElementById("btn");
btn.addEventListener("click", someone.whoAmI); // btn
btn.addEventListener("click", myWhoAmI); // btn

// 함수를 꺼내서 => btn에게 전달해줬다.
// function() {console.log(this)}

var bindedWhoAmI = myWhoAmI.bind(someone);
bindedWhoAmI(); // {name: "frankkim", whoAmI: ƒ}
btn.addEventListener("click", bindedWhoAmI); // {name: "frankkim", whoAmI: ƒ}
```

```
호출한놈(객체) === this;
JS => 누가 실행했냐.

someone을 무조건 this로 받겠다.
bind(someone) =>  this를 someone로 고정시키겠다.

호출하는 방법은 같은데,
한가지 예외가 있다 => bind 묶인 아이가, this 다.

자바스크립트는 선언할때 결정되는 것이 있고, 호출할 때 결정되는 것이 있다.

선언 => 클로저
호출 => this (bind는 예외), bind로 부르면 무조건 this.

this는 바로 호출할 때 결정되는 것이고,
this는 호출한놈, 호출한 객체가 바로 this.

this 호출과 무관하게, 묶어줄수 있는게 bind(고정)이다.
```
