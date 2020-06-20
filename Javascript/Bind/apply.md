# apply

객체는 속성(property)을 가지고 있다.

속성에 함수가 들어가 있다면 => method

func() 객체이기 때문에, 메소드를 가지고 있다.
메소드는 우리가 만드는게 아니라 자바스크립트가 제공하는 내장된 객체다.

```js
function func() {}
func();

// 함수 호출 역할
func.apply();
func.call();
```

```js
function sum(arg1, arg2) {
  return arg1 + arg2;
}

sum(1, 2); // 3

//  함수 호출 방법
//  apply() { [native code] } 브라우저가 제공하기 때문에, 코드를 보여줄 수 없다.(내장메서드)
sum.apply(null, [1, 2]); //3
sum.call();
```

## What is "this"?

this는 누가 호출 했는지에 정해진다.
sum() - sum.apply(null)

```js
o1 = { val1: 1, val2: 2, val3: 3 };
o2 = { v1: 10, v2: 50, v3: 100, v4: 25 };

function sum() {
  var _sum = 0;
  for (name in this) {
    _sum += this[name];
  }
  return _sum;
}

sum.apply(o1); // 6
// o1.sum  o1객체에 sum 메서드가 된다.
sum.apply(o2); // 185
```

```js
function sum() {
  var _sum = 0;
  for (name in this) {
    if (typeof this[name] !== "function") {
      _sum += this[name];
    }
  }
  return _sum;
}
o1 = { val1: 1, val2: 2, val3: 3, sum: sum };
o2 = { v1: 10, v2: 50, v3: 100, v4: 25, sum: sum };
o1.sum();
o2.sum();
// sum.apply(o1); // 6
// sum.apply(o2); // 185
```
