# High order function

[reference in Korean](https://iamawebdeveloper.tistory.com/25)
[florakid.com](http://www.florakid.com/florakid_lib/sub/javascript/program_logic.html)
[poiemaweb.com](https://poiemaweb.com/js-array-higher-order-function)

### 공통부분을 추출한다. 모든 로직을 공유한다.

- [x] 구현시 반복문 경계 부분의 상태를 올바르게 지정하기가 어려운 부분이 있다면, 고차 함수로 구현하면 지역화된다.
- [x] 고차 함수를 사용하면, 로직 내의 어떤 버그를 수정할 때 프로그램 전체에 퍼져 있는 코딩 패턴의 모든 사례를 고치는 대신, 단 한번만 수정하면 된다.

- [x] 또한 연산의 효율성을 최적화할 필요가 있다고 판단될 때도 역시 한군데만 수정하면 모든 처리가 가능하다.
- [x] 마지막으로 추상에 buildString 같은 명백한 이름을 지정해주면 코드를 읽는 사람이 구현의 세부 사항을 해석할 필요 없이 코드가 어떤 동작을 하는지 쉽게 이해할 수 있다.

- [x] 고차 함수의 사용법을 익히고 나면 동일한 패턴을 반복적으로 작성하여 더 간결한 코드를 만들게 되고, 더 높은 생산성을 얻게 되며, 가독성 또한 개선하게 된다. 항상 공통 패턴을 눈여겨 보고 고차 유틸리티 함수로 옮기는 개발 습관이 매우 중요하다.

### Higher-order-function이란 2가지 중 하나이상을 만족하는 함수를 말합니다.

- [x] 함수를 파라미터로 전달 받는 함수
- [x] 함수를 리턴하는 함수
- [x] Array객체의 forEach, map, filter등의 메소드는 모두 고차 함수에 속한다.

### 자바스크립트의 함수는 일급 객체이므로 값처럼 인자로 전달할 수 있으며 반환할 수도 있다.

### 고차 함수(Higher order function)는 함수를 인자로 전달받거나 함수를 결과로 반환하는 함수를 말한다. 다시 말해, 고차 함수는 인자로 받은 함수를 필요한 시점에 호출하거나 클로저를 생성하여 반환한다. 자바스크립트의 함수는 일급 객체이므로 값처럼 인자로 전달할 수 있으며 반환할 수도 있다.

```js
// 고차 함수
function makeCounter(func) {
  var count = 0;
  return function() {
    count = func(count);
    return count;
  };
}

var predicate = {
  inc: n => ++n,
  dec: n => --n
};

var incCounter = makeCounter(predicate.inc);
console.log(incCounter());
console.log(incCounter());
console.log(incCounter());

var decCounter = makeCounter(predicate.dec);
console.log(decCounter());
console.log(decCounter());
console.log(decCounter());
```

```js
function foo (arr, func){
  for ( var key in arr ){
    func(key,arr[key]);
  }
}
var arr = [1,2,3,4,5];
foo(arr,function(key, value){
  console.log("key/Value : " , key, "/",value);
});
-----------------------------------------------------
[result]
key/Value :  0 / 1
key/Value :  1 / 2
key/Value :  2 / 3
key/Value :  3 / 4
key/Value :  4 / 5
```

```js
// 각 예제는 서로 다른 문자열을 생성하지만, 모두 공통의 로직을 공유한다.
// 모든 반복문은 각각의 개별적인 부분을 생성하기 위해 어떤 계산을 하고, 그 결과를 합쳐 문자열을 생성한다.
// 공통 부분을 추출하고 하나의 유틸리티 함수로 옮기면 다음과 같은 코드를 만들 수 있다.
function buildString(n, callback) {
  var result = "";
  for (var i = 0; i < n; i++) {
    result += callback(i);
  }

  return result;
}

// buildString 구현이 반복문들의 공통 부분을 어떻게 포함시켰는지를 주목하여 살펴보자.
// 공통 부분은 다양한 파라미터를 사용한다. 반복문을 순회하는 회수는 변수 n이 되고, 문자열을 생성하는 부분은 callback 함수를 호출하게 되었다.
// 이제 buildString을 이용하면 이전의 세 예제를 다음과 같이 간단하게 구현할 수 있다.

var alphabet = buildString(26, function(i) {
  return String.fromCharCode(aIndex + i);
});

var digits = buildString(10, function(i) {
  return i;
});

var random = buildString(8, function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + aIndex);
});
```

```js
고차함수(higher-order function)
고차 함수 (higher-order function)는 하나 이상의 함수를 인자로 받고, 새 함수를 반환하는 함수이다.

인자로 받는 함수(흔히 콜백 함수로 불리는데, 고차 함수로 인해 되돌려지기 (callback) 때문이다.)는 특히 강력하고 표현력 높으며 자바스크립트에서 자주 쓰이는 코딩 관례이다.



var a = [4, 11, 2, 10, 3, 1];



a.sort();					// Output: 1,10,11,2,3,4)



// 표준 라이브러리는 호출자로부터 비교 메서드를 가지는 객체를 전달받기를 요구하지만,

// 하나의 메서드만 필요하기 때문에 함수를 직접 받는 것이 더 간단하고 간결하다.

// 아래 예제는 익명함수를 사용한 것이다.

a.sort(function (first, second) {

    if (first == second)

        return 0;

    if (first < second)

        return -1;

    else

        return 1;

});		// Output: 1,2,3,4,10,11.





고차 함수를 사용하지 않고 만든 예제 3개


// 고차 함수의 사용에 익숙해지고 나면, 직접 작성할 기회도 생길 것이다.

// 비슷하거나 중복된 코드를 자주 보게 된다면 이는 숨길 수 없는 고차 함수 추상의 신호다.

// 예를 들어, 알파벳 문자로 문자열을 만드는 프로그램의 일부를 찾았다고 가정해 보자.

var aIndex = 'a'.charCodeAt(0);

var alphabet = "";

for(var i=0;i<26;i++) {

	alphabet += String.fromCharCode(aIndex +i);

}



alphabet;   // "abcdefghijklmnopqrstuvwxyz"



// 반면, 프로그램의 다른 부분에서는 다음과 같이 숫자 값을 포함하는 문자열을 생성한다고 가정하자.

var digits = "";

for(var i=0;i<10;i++) {

	digits += i;

}



digits; // "0123456789"



// 또 다른 부분에서는 , 임의 글자로 문자열을 만든다.

var random = "";

for(var i=0;i<8;i++) {

	random += String.fromCharCode(Math.floor(Math.random()*26)+aIndex);

}



random;		// 매번 다른 결과를 반환함.





고차 함수를 사용하여 만든 예제 3개
// 각 예제는 서로 다른 문자열을 생성하지만, 모두 공통의 로직을 공유한다.
// 모든 반복문은 각각의 개별적인 부분을 생성하기 위해 어떤 계산을 하고, 그 결과를 합쳐 문자열을 생성한다.
// 공통 부분을 추출하고 하나의 유틸리티 함수로 옮기면 다음과 같은 코드를 만들 수 있다.
function buildString(n, callback) {
	var result = "";
	for(var i=0;i<n;i++) {
		result += callback(i);
	}

	return result;
}

// buildString 구현이 반복문들의 공통 부분을 어떻게 포함시켰는지를 주목하여 살펴보자.
// 공통 부분은 다양한 파라미터를 사용한다. 반복문을 순회하는 회수는 변수 n이 되고, 문자열을 생성하는 부분은 callback 함수를 호출하게 되었다.
// 이제 buildString을 이용하면 이전의 세 예제를 다음과 같이 간단하게 구현할 수 있다.

var alphabet = buildString(26, function (i) {
	return String.fromCharCode(aIndex +i);
});

var digits = buildString(10, function (i) {
	return i;
});

var random = buildString(8, function () {
	return String.fromCharCode(Math.floor(Math.random()*26)+aIndex);
});




고차 함수 추상을 생성하는 방식에는 장점이 많다.
구현시 반복문 경계 부분의 상태를 올바르게 지정하기가 어려운 부분이 있다면, 고차 함수로 구현하면 지역화된다. 고차 함수를 사용하면, 로직 내의 어떤 버그를 수정할 때 프로그램 전체에 퍼져 있는 코딩 패턴의 모든 사례를 고치는 대신, 단 한번만 수정하면 된다.

또한 연산의 효율성을 최적화할 필요가 있다고 판단될 때도 역시 한군데만 수정하면 모든 처리가 가능하다.

마지막으로 추상에 buildString 같은 명백한 이름을 지정해주면 코드를 읽는 사람이 구현의 세부 사항을 해석할 필요 없이 코드가 어떤 동작을 하는지 쉽게 이해할 수 있다.



고차 함수의 사용법을 익히고 나면 동일한 패턴을 반복적으로 작성하여 더 간결한 코드를 만들게 되고, 더 높은 생산성을 얻게 되며, 가독성 또한 개선하게 된다. 항상 공통 패턴을 눈여겨 보고 고차 유틸리티 함수로 옮기는 개발 습관이 매우 중요하다.



일반적으로 사용되는 고차 함수 예제

// f(g(...)) 를 계산하는 새로운 함수를 반환한다.

// 반환되는 함수 h는 모든 전달인자를 g로 전달하고, g의 결과 값을 f에 전달한다.

// 그리고 f의 결과 값을 반환한다.

// f와 g 모두 같은 this 값을 사용하여 호출되는데,

// 이 this 값은 h가 호출될 때의 this 값과 같은 것이다.

function compose(f, g) {

return function () {

// f는 하나의 값만 넘기기 때문에 call을 사용하고

// g에는 값 배열을 넘겨야 하기 때문에 apply를 사용한다.

return f.call(this, g.apply(this, arguments));

};

};



var square = function(x) { return x*x };

var sum = function(x,y) { return x+y; };

var squareofsum = compose(square, sum);

squareofsum(2,3);        // 25

```
