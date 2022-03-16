// ================  createRef ================
/*
- 함수 컴포넌트에서 createRef를 사용할 수는 있습니다.
- 하지만, "함수 컴포넌트는 상태가 바뀔 때"마다 될 때마다 "새롭게 호출"되기에,
- ref가 가리키는 DOM 요소가 re-render 되는 것과 상관없이 새로운 ref 객체가 계속 만들어지게 됩니다.
- 하지만 이를 useRef로 바꾼다면?
*/
const Example = () => {
  const ref = createRef(null);
  const [shouldRerender, setShouldRerender] = useState(false);

  useEffect(() => {
    console.log(ref);
  }, [ref]);

  const rerender = () => {
    setShouldRerender(!shouldRerender);
  };

  return (
    <div>
      <div
        ref={ref}
        style={{ backgroundColor: "red", width: "100px", height: "100px" }}
      />
      <button onClick={rerender}> rerender</button>
    </div>
  );
};
