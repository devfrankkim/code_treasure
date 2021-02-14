# Easy way to understand How the DOM works

```
DOM -> Document Object Model
This is like chain.

document
location - another attribute inside of the document object model
location{href,protocol, host}
document.location
document.body.parentElement
document.getElementsByClassName('topics')[2].children.length;
```

[reference](https://www.youtube.com/watch?v=2Tld4yyN_tw)

document.getElementsByClassName('topics')

```js
const user = {
  name: "Kim",
  email: "Kim@gmail.com",
  favorites: ["tuna", "salmon"],
};

user.email; // Kim@gmail.com
user.favorites; // ["tuna", "salmon"]
user.favorites[1]; // "salmon"
```
