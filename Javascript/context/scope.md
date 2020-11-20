## Scope

함수를 처음 선언하는 순간, 
함수 내부의 변수는 자기 스코프로부터 가장 가까운 곳(상위 범위에서)에 있는 변수를 계속 참조하게 됩니다




- Each time we create a new function, we also create a new scope.
- The JavaScript compiler will always look first in the local scope for a variable name, and if unsuccessful will move up into any/all enclosing functions/scopes looking for the same variable.

```
Scope is how a computer keeps track of all the variables in a program.
 It refers to the specific environment where a variable is accessible and can be used. 
 JavaScript uses the lexical scoping approach which allows for scopes to be nested and therefore an outer scope encloses (hence closure) an inner scope.
```

## 스코프(Scope)
**자바스크립트에서 스코프란 어떤 변수들에 접근할 수 있는지를 정의합니다.**
스코프엔 두 가지 종류가 있는데요, 
전역 스코프(global scope)와 지역 스코프(local scope)가 있죠.

전역 스코프(Global Scope)
변수가 함수 바깥이나 중괄호 ({}) 바깥에 선언되었다면, 전역 스코프에 정의된다고 합니다.

전역 변수를 선언하면, 여러분의 코드 모든 곳에서 해당 변수를 사용할 수 있습니다. 심지어 함수에서도 말이죠.


비록 전역 스코프에 변수를 선언할 수는 있어도, 그러지 않는 것이 좋습니다. 왜냐하면, 두 개 이상의 변수의 이름이 충돌하는 경우가 생길 수도 있기 때문이죠. 만약 변수를 const나 let을 사용하여 선언했다면, 이름에 충돌이 발생할 때마다 에러가 발생합니다. 이렇게 되면 안 되죠.
```js
// Don’t do this!
let thing = 'something'
let thing = 'something else' // Error, thing has already been declared
```

그래서 여러분은 언제나 전역 변수가 아닌, 지역 변수로써 변수를 선언해야 합니다.

## 지역 스코프 (Local Scope)

**자바스크립트에서는 두 가지의 `지역 변수`가 존재합니다.**
**바로 함수 스코프(function scope)와 블록 스코프(block scope)죠.**


코드의 특정 부분에서만 사용할 수 있는 변수는 지역 스코프에 있다고 할 수 있습니다. 
이런 변수들은 지역 변수라고 불리죠.

### 1. 함수 스코프(Function Scope)
함수 내부에서 변수를 선언하면, 그 변수는 선언한 변수 내부에서만 접근할 수 있습니다. 
**함수 바깥에서는 해당 변수에 접근할 수 없죠.**

```js
function sayHello () {
  const hello = 'Hello CSS-Tricks Reader!'
  console.log(hello)
}
sayHello() // 'Hello CSS-Tricks Reader!'
console.log(hello) // Error, hello is not defined
```


### 2. 블록 스코프(Function Scope)
중괄호({}) 내부에서 const 또는 let으로 변수를 선언하면, 
그 변수들은 중괄호 블록 내부에서만 접근할 수 있습니다.

```js
{
  const hello = 'Hello CSS-Tricks Reader!'
  console.log(hello) // 'Hello CSS-Tricks Reader!'
}
console.log(hello) // Error, hello is not defined
```


### 함수 호이스팅(Function hoisting)과 스코프

함수가 함수 선언식(function declaration)으로 선언되면, 
현재 스코프의 최상단으로 호이스팅(hoist) 됩니다.

반면 함수가 함수 표현식(function expression)으로 선언되면, 함수는 현재 스코프의 최상단으로 호이스팅되지 않습니다.

이렇게 두 방식의 행동이 다르기 때문에, 함수 호이스팅은 혼란스러울 수 있으므로 사용하면 안 됩니다. 언제나, 함수를 호출하기 전에 선언해놓아야 합니다.

**함수는 서로의 스코프에 접근할 수 없다**

```js
function first () {
  const firstFunctionVariable = 'I’m part of first'
}
function second () {
  first()
  console.log(firstFunctionVariable) // Error, firstFunctionVariable is not defined
}
```

### 네스팅된 스코프(Nested scopes)

함수가 다른 함수 내부에서 정의되었다면, 
내부 함수는 외부 함수의 변수에 접근할 수 있습니다. 

**이런 행동을 렉시컬 스코핑(lexical scoping)이라고 부르죠.**
**하지만, 외부 함수는 내부 함수의 변수에 접근할 수 없습니다.**
```js
function outerFunction () {
  const outer = 'I’m the outer function!'
    
  function innerFunction() {
     const inner = 'I’m the inner function!'
     console.log(outer) // I’m the outer function!
  }
    
  console.log(inner) // Error, inner is not defined
}
```





==========================

지역 스코프 (Local Scope)
여러분 코드의 특정 부분에서만 사용할 수 있는 변수는 지역 스코프에 있다고 할 수 있습니다. 이런 변수들은 지역 변수라고 불리죠.
자바스크립트에서는 두 가지의 지역 변수가 존재합니다. 바로 함수 스코프(function scope)와 블록 스코프(block scope)죠.
먼저 함수 스코프부터 알아보도록 합시다.
함수 스코프(Function Scope)
여러분이 함수 내부에서 변수를 선언하면, 그 변수는 선언한 변수 내부에서만 접근할 수 있습니다. 함수 바깥에서는 해당 변수에 접근할 수 없죠.