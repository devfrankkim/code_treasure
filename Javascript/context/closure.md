## 1. 실행 컨텍스트

## 2. 실행 컨텍스트의 3가지 객체

- variable object 
  ex) vars, function declarations, arguments...
- scope chain 
  ex) variable object + all parent scopes
- thisValue 
  ex) context object


### 2.1 Variable Object (VO / 변수객체)


실행 컨텍스트가 생성되면 자바스크립트 엔진은 실행에 필요한 여러 정보들을 담을 객체를 생성한다. 
이를 Variable Object(VO / 변수 객체)라고 한다. 
Variable Object는 `코드가 실행될 때 엔진에 의해 참조되며 코드에서는 접근할 수 없다.`
`엔진에 의해 참조된다.`
- 변수
- 매개변수(parameter)와 인수 정보(arguments)
- 함수 선언(함수 표현식은 제외)

Variable Object는 실행 컨텍스트의 프로퍼티이기 때문에 값을 갖는데 
이 값은 다른 객체를 가리킨다. 

그런데 전역 코드 실행시 생성되는 전역 컨텍스트의 경우와 
함수를 실행할 때 생성되는 함수 컨텍스트의 경우, 
가리키는 객체가 다르다. 

이는 전역 코드와 함수의 내용이 다르기 때문이다. 

예를 들어 전역 코드에는 매개변수가 없지만 함수에는 매개변수가 있다.
Variable Object가 가리키는 객체는 아래와 같다.

전역 컨텍스트의 경우
**Variable Object는 유일하며 최상위에 위치하고 모든 전역 변수,**
**전역 함수 등을 포함하는 전역 객체(Global Object / GO)를 가리킨다.**
전역 객체는 전역에 선언된 전역 변수와 전역 함수를 프로퍼티로 소유한다.

전역 컨텍스트 
- variable object -> "foo" , variable "x"

함수 컨텍스트의 경우
Variable Object는 Activation Object(AO / 활성 객체)를 가리키며 
매개변수와 인수들의 정보를 배열의 형태로 담고 있는 객체인 arguments object가 추가된다.
- arguments, "bar", variable "y"

```js
var x = 'xxx';

function foo () {
  var y = 'yyy';

  function bar () {
    var z = 'zzz';
    console.log(x + y + z);
  }
  bar();
}
foo();
```

### 2.2 Scope Chain (SC)

스코프 체인(Scope Chain)은 일종의 리스트로서
전역 객체와 중첩된 함수의 스코프의 레퍼런스를 차례로 저장하고 있다.
다시 말해, 스코프 체인은 해당 전역 또는 함수가 참조할 수 있는 변수,
함수 선언 등의 정보를 담고 있는 전역 객체(GO) 또는 활성 객체(AO)의 리스트를 가리킨다.

엔진은 스코프 체인을 통해 렉시컬 스코프를 파악한다.
함수가 중첩 상태일 때 
하위함수 내에서 -> 상위함수의 스코프와 -> 전역 스코프까지 참조할 수 있는데
이것은 스코프 체인을 검색을 통해 가능하다.

함수가 중첩되어 있으면 중첩될 때마다 
부모 함수의 Scope가 자식 함수의 스코프 체인에 포함된다. 


함수 실행중에 변수를 만나면 그 변수를 우선 현재 Scope, 
즉 Activation Object에서 검색해보고, 
만약 검색에 실패하면 스코프 체인에 담겨진 순서대로 
그 검색을 이어가게 되는 것이다. 
이것이 스코프 체인이라고 불리는 이유이다.

예를 들어 함수 내의 코드에서 변수를 참조하면 엔진은
스코프 체인의 첫번째 리스트가 가리키는 AO에 접근하여 변수를 검색한다.
만일 검색에 실패하면 다음 리스트가 가리키는 Activation Object(또는 전역 객체)를 검색한다. 

이와 같이 순차적으로 스코프 체인에서 변수를 검색하는데 
결국 검색에 실패하면 정의되지 않은 변수에 접근하는 것으로 판단하여 
Reference 에러를 발생시킨다. 
스코프 체인은 함수의 감추인 프로퍼티인 [[Scope]]로 참조할 수 있다.


### 2.3 this value

this 프로퍼티에는 this 값이 할당된다. 
this에 할당되는 값은 함수 호출 패턴에 의해 결정된다.


## 3. 실행 컨텍스트의 생성 과정
```js
var x = 'xxx';

function foo () {
  var y = 'yyy';

  function bar () {
    var z = 'zzz';
    console.log(x + y + z);
  }
  bar();
}

foo();
```

### 3.1 전역 코드에의 진입 (실행 컨텍스트 스택)

컨트롤이 실행 컨텍스트에 진입하기 이전에 유일한 전역 객체(Global Object)가 생성된다. 
전역 객체는 단일 사본으로 존재하며 이 객체의 프로퍼티는 코드의 어떠한 곳에서도 접근할 수 있다. 초기 상태의 전역 객체에는 빌트인 객체(Math, String, Array 등)와 BOM, DOM이 설정되어 있다.

전역 객체가 생성된 이후, 
전역 코드로 컨트롤이 진입하면 전역 실행 컨텍스트가 생성되고 실행 컨텍스트 스택에 쌓인다.



