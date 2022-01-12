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

### scrollBy & scrollTo

[https://ko.javascript.info/size-and-scroll-window](https://ko.javascript.info/size-and-scroll-window)

# 1. scrollBy( x, y )

- 상대적 위치 (relative)
- 현재 위치를 기준으로 파라메터 값으로 넘겨준 만큼 이동합니다.
- 창을 상대적인 좌표로 스크롤합니다.

```jsx
// scrollBy( 가로 스크롤 값, 세로 스크롤 값 );
window.scrollBy(100, 100);
```

현재 스크롤 위치에서 x스크롤을 100만큼, y스크롤을 100만큼 이동시킵니다.

# 2. scrollTo( x, y )

- 절대적 위치 (absolute)
- 왼쪽 상단 모서리 부터 시작하여 전체 스크롤 값을 기준으로 파라메터로 넘겨준 값으로 이동합니다.( 현재 위치가 아닌 상단 모서리를 기준으로 합니다. )
- 창을 절대적인 좌표로 이동합니다.

```jsx
// scrollTo( 가로 스크롤 위치 값, 세로 스크롤 위치 값 );

window.scrollBy(100, 100);
```

- 위 메서드들의 차이점은 기준점 그리고 절대적인지 상대적인지에 대해 차이가 있습니다.
