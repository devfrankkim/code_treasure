// ================  useRef ================
/*
- useRef는 이름에서 알 수 있듯이
- hook으로 "함수 호출에 관계없이" "state"를 유지합니다. 동작이 예상 가시나요?
- 몇 번을 클릭해도 ref의 값은 유지되기에 콘솔 창에는 한 번만 출력되게 됩니다.
- "함수 컴포넌트"를 사용할 때는 useRef를 사용해야 할 것입니다.
*/

const Example = () => {
  const ref = useRef(null);
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
      <button onClick={rerender}>rerender</button>
    </div>
  );
};
