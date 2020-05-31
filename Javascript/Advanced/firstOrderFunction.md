# First-order function

function that's not high-order function

```js
const increase = value => value + 1;
const apply = (fx, value) => fx(value);

console.log(apply(increase, 9)); // 10
```

```js
const greeting = message => name => `${message}, ${name}!`;
const koreanGreeting = greeting("안녕");
const englishGreeting = greeting("Hello");

console.log(koreanGreeting("세계")); // 안녕, 세계!
console.log(englishGreeting("world")); // Hello, world!
```

```js
var minus = (x, y) => x - y;
var plus = (x, y) => x + y;
var curry = (fn, x) => y => fn(x, y);
var minus100 = curry(minus, 1000);
var plus100 = curry(plus, 1000);

console.log(minus100(100));
console.log(plus100(100));
```
