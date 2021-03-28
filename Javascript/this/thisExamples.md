# Examples for "this"

```
A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.

A property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.

ES2015 introduced arrow functions which don't provide their own this binding (it retains the this value of the enclosing lexical context).

1. in strict mode can be any value
2. non-strict mode is always a reference to an object
```

전역 실행 문맥global execution context에서 this는 엄격 모드 여부에 관계 없이 전역 객체를 참조합니다.

In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.
