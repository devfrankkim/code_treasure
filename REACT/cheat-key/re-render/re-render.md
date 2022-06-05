## When the data doesn't show up right away.

```js
// setState 바꾸고, 의존성에서 다시 렌더링 강제로 시켜버리기
useEffect(() => {
  if (userData) {
    setName(userData.name);
  }
}, [userData]);
```
