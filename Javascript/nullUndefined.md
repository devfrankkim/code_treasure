# undefined vs null

[The best reference for undefined vs null](https://josephkhan.me/javascript-undefined-vs-null/)

- computer give the value => undefined
- people give the value => null

```js
undefined + 1; // NaN
null + 1; // 1

typeof null; // "object"
typeof undefined; // "undefined"
```

### Why typeof null is an “object”?

That’s a pretty weird thing in JavaScript. The type of null is an “object”, which indicates that it must be an object. But that’s not true. In fact, null is one of the primitive values in JavaScript.

This is actually a bug in the language and unfortunately can’t be fixed that easily, because it will break existing codebase. There are millions of sites out there which run code that may have been written years and years ago, and will possibly never be touched again.

In fact, it has been there from the first version of JavaScript that was written and released back in May 1995 with the name Mocha. This is what Brendon Eich (creator of JavaScript) quoted regarding this anomaly.

_We have reason to believe typeof null === “object” is a bug that could bite real content, from our spidering of the web. It might be best to leave typeof utterly alone and deprecate it, but I’m still in favor of the null bug-fix._

### Here’s a logical reason behind typeof null returning “object”.

In the initial version of JavaScript, values were storied in 32 bit units. The first 3 bits represented the data type tag followed by the remaining bits that represented the value.

For all objects it was 000 as the type tag bits. null was considered to be a special value in JavaScript from its very first version. null was a representation of the null pointer. However, there were no pointers in JavaScript like C. So null simply meant nothing or void and was represented by all 0’s. Hence all its 32 bits were 0’s. So whenever the JavaScrit interpreter read null, it considered the first 3 bits as type “object”. That is why typeof null returns “object”.
