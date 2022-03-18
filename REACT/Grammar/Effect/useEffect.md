### useEffect

- useEffect mount, unmount, clean up Default:
- (DOM) 화면 페인팅 → useEffect 실행

```
React is going to calculate out DOM changes → it’s going to render DOM out to the screen → at some point, useEffect is going to run in the background. → `log it out whenever it can.(quick)` 비동기
```

- `useEffect runs after the DOM has been painted`
- Dependency array, clean up
- `Mount`: (화면에 첫 렌더링-painting)
- `Update`: (다시 렌더링)
- `Unmount`: (화면에서 사라질때)
- 콜백함수 필요. 다른 함수의 인자로, 전달된 함수.
- `clean up`: 해당 컴포넌트가 `Unmount` 될 때 or `다음 렌더링`시 effect가 `실행되기 이전` 실행.

```js
useEffect(() => {});
// 컴포넌트가 맨 처음 화면에 렌더링 될 때.
// 컴포넌트가 다시 렌더링 될 때.
// 렌더링 될 때 마다 실행.

useEffect(() => {}, [value]);
// 컴포넌트가 맨 처음 화면에 렌더링 될 때.
// value 값이 바뀔 때 실행.
// value 값이 없으면, 처음 화면 렌더링 될 때만 실행.

useEffect(() => {
  // 구독..
  return () => {
    // 구독 해지..
  };
}, []);

// 클린 업 ex) (타임업, 이벤트리스너)
// 사용법: 해당 컴포넌트가 Unmount 될 때 or 다음 렌더링시 effect가 실행되기 이전 클린업이 된다.
```
