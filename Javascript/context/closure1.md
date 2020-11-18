## 클로저(Closures)

- 함수와 함수가 접근할 수 있는 스코프가 클로저 관계를 맺는다.
  
```js
function기준으로 스코프가 정해진다.
function(){ // 익명 함수 
    console.log(i) //where is i?
}
```
- 비동기 함수 안에서, 실행되는 순간에 정해진다.

- 함수가 실행되기 전까지는 그대로 (i)를 가지고 있다.
- 함수 안의 변수는 "실행" 될 때 값이 결정된다.

```
함수 내부에 함수를 작성할 때마다, 여러분은 클로저를 생성>한 것입니다. 
내부에 작성된 함수가 바로 클로저죠. 
클로저는 차후에 외부 함수의 변수를 사용할 수 있기 때문에 대개 반환하여 사용합니다.

클로저는 외부 함수의 변수에 접근할 수 있기 때문에, 일반적으로 두 가지 목적을 위해 사용합니다.
```
1. 사이드 이펙트(side effects) 제어하기
2. private 변수 생성하기

### 클로저로 사이드 이펙트 제어하기
```
함수에서 값을 반환할 때를 제외하고 무언가를 행할 때 사이드 이펙트(side effects)가 발생합니다. 여러 가지 것들이 사이드 이펙트가 될 수 있는데요, 
예를 들어 Ajax 요청이나 timeout을 생성할 때, 
그리고 심지어 console.log를 선언하는 것도 사이드 이펙트 입니다.

보통 Ajax나 timeout과 같이 코드 흐름을 방해하는 것들이 신경 쓰일 때, 클로저를 활용하여 사이드 이펙트를 제어합니다.

예를 들어, 여러분이 친구 생일을 위해 케이크를 만들어 주려고 한다고 해보죠. 
케이크를 만드는 데 1초가 걸린다면, 
1초 후에 made a cake을 로깅 하는 함수를 작성했습니다.
```
```js
function makeCake() {
  setTimeout(_ => console.log('Made a cake'), 1000)
}
```
```
보다시피, 케이크를 만드는 함수는 사이드 이펙트가 존재합니다. 바로 timeout이죠.

이제는 친구가 케이크의 맛을 선택할 수 있도록 해봅시다. 
그렇게 하기 위해선 맛을 추가할 수 있도록 makeCake함수를 작성할 수 있습니다.
```
```js
function makeCake(flavor) {
  setTimeout(_ => console.log(`Made a ${flavor} cake!', 1000)`)
}

makeCake("banana")
```
```
그런데 문제가 생겼습니다.
여러분은 케이크의 맛을 알자마자 케이크를 만들고 싶지 않습니다. 
맛을 알게 된 후에, 원하는 시점에 케이크를 만들고 싶죠.

이 문제를 해결하기 위해서, 
맛의 정보를 담고 있는 prepareCake함수를 작성할 수 있습니다. 
그리고 prepareCake함수 내부에서는 클로저인 makeCake을 반환합니다.
```
**이제 여러분이 원하는 시점에 언제든지 반환된 함수를 호출할 수 있고,**
**호출한 후 1초 뒤에 케이크가 만들어질 겁니다.**

```js
function prepareCake (flavor) {
  return function () {
    setTimeout(_ => console.log(`Made a ${flavor} cake!', 1000)`)
  }
}
const makeCakeLater = prepareCake("banana")
// And later in your code…

makeCakeLater()
// Made a banana cake!
```
```
이와 같이 클로저를 활용하여 사이드 이펙트를 줄일 수 있습니다. 
여러분이 원할 때 내부 클로저를 호출할 수 있는 함수를 만드는 것이죠.
```
### Private 변수와 클로저
```
잘 아시다시피, 함수 내의 변수는 함수 바깥에서 접근할 수 없습니다. 
그 변수들은 접근할 수 없기 때문에, private 변수라고 불립니다.
하지만, 해당 변수들에 접근해야 할 필요가 종종 발생합니다. 
이것 또한 클로저를 활용해서 할 수 있죠.
```
```js
function secret (secretCode) {
  return {
    saySecretCode () {
      console.log(secretCode)
    }
  }
}
const theSecret = secret('CSS Tricks is amazing')
theSecret.saySecretCode()
// 'CSS Tricks is amazing'
```
```
해당 예제에서 saySecretCode는 유일하게 
secret함수 바깥에서 secretCode를 노출하는 함수(클로저)입니다. 
따라서, 이런 함수를 특권 함수(privileged function)라고 부르기도 합니다.

함수 내부에서 함수를 선언할 때, 내부의 함수는 클로저라고 불립니다. 이 클로저는 외부 함수에서 생성된 변수들에 접근할 수 있는 권한을 가지고 있습니다.
```
```js
for (var i=0; i<10; i++){
    setTimeout(function(){
        console.log(i);
    }, i*100);
}
// (10) 10

```

```js
setTimeout(function(){
    console.log(i);
}, 0)
setTimeout(function(){
    console.log(i);
}, 100)
setTimeout(function(){
    console.log(i);
}, 200)
...
```
```
좀더 자세하게 설명하자면, 
자바스크립트는 싱글스레드 언어이기 때문에 
콜스택에 작업을 push하고 
처리할때마다 하나씩 pop합니다. 

setTimeout과 같은 비동기작업은, 콜스택이 아닌 이벤트큐에 저장해놓습니다. 
그 후 이벤트루프가 
콜스택이 비어있는 순간에 
이벤트 큐에 쌓여있던 작업을 push하여 콜백함수를 실행시켜줍니다. 
위의 예에서는 콜백함수를 실행할때 i는 이미 100이 되어있기 때문에 0이아니라 100이 출력됩니다.
```
- 해결방법
```js
for (var i = 0; i < 10; i++) {
    function call(j) {
        setTimeout(function () {
            console.log(j);
        }, j * 100);
    }
    call(i);
}
```
```
변수의 정적 유효범위를 활용하여 비동기함수에서 처리할 변수의 값을 함수로 감싸줍니다. 
그러면 i 값이 10이 되어도 비동기 함수안에서 사용하는 j값은 고정되어 변하지 않습니다. 
마치 함수로 변수를 고정(폐쇄)한다고 하여 이를 클로져(closure)라고 부릅니다.
```

```js
function call(j) {
    setTimeout(function () {
        console.log(j);
    }, j * 100);
}
call(0);
function call(j) {
    setTimeout(function () {
        console.log(j);
    }, j * 100);
}
call(1);
...
```
```
매개변수 또한 지역변수이기 때문에 지역변수가 call함수안에서 고정되어있어 변하지 않습니다.

많은 경우 반복문과 비동기 함수가 만날 때 클로져 이슈가 자주 발생합니다. 
위의 코드는 아래와 같이 즉시실행하는 형식을 더 많이 사용합니다.
```
```js
for (var i = 0; i < 10; i++) {
    (function call(j) {
        setTimeout(function () {
            console.log(j);
        }, j * 100);
    })(i);
}
```


```js
var counter = function() {
  var count = 0;
  function changeCount(number) {
    count += number;
  }
  return {
    increase: function() {
      changeCount(1);
    },
    decrease: function() {
      changeCount(-1);
    },
    show: function() {
      alert(count);
    }
  }
};
var counterClosure = counter();
counterClosure.increase();
counterClosure.show(); // 1
counterClosure.decrease();
counterClosure.show(); // 0
```

```js
for (var i = 0; i < 5; i++) {
  $('#target' + i).on('click', function() {
    alert(i);
  });
}
```
lexical scoping 에 따라 함수는 `선언`할 때 `스코프가 생성됩니다.`
`즉 이벤트리스너 안의 i는 외부의 i를 계속 참조하고 있는 겁니다`
i는 반복문 종료 후 최종적으로 5가 되기 때문에 결국 alert 결과가 모두 5가 됩니다.

```js
for (var i = 0; i < 5; i++) {
  (function(j) {
    $('#target' + j).on('click', function() {
      alert(j);
    });
  })(i);
}
```