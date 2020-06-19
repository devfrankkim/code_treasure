### bind vs call 

## call 호출될 때 마다, 동적으로 this가 바뀐다.

```js
var kim = {name: 'kim', first:20, second:20}
var lee = {name: 'kim', first:10, second:10}

// sum(); === sum.call();

// 모든 함수는 call method를 가지고 있다.
// 자바스크립트에서는 함수도 객체이기 때문이다.

function sum(){
    // 내부적으로 call(kim) 을 받으면 => this = kim;
    return this.first + this.second;
}

sum.call(kim); 

// 혼자 있는 함수
function sum(prefix){
    return prefix+(this.first+this.second);
}

console.log("sum.call(kim)", sum.call(kim, '=> ')); // sum.call(kim) => 40
console.log("lee.call(kim)", sum.call(lee, ': ')); // lee.call(kim) : 20

```

### bind는 정적으로 this를 고정시켜버린다.

```js
    var kim = {name: 'kim', first:20, second:20}
    var lee = {name: 'kim', first:10, second:10}

    function sum(prefix){
        return prefix+(this.first+this.second);
    }

    var kimSum = sum.bind(kim, ' bind => ');
    console.log('kimSum() => ', kimSum());

```