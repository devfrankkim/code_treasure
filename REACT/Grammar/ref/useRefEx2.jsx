import { useState, useRef, useEffect } from "react";

function App() {
  const [name, setName] = useState("");

  const renders = useRef(1);
  const prevName = useRef("");

  // ref's are not reactive for UI.
  // you don't see an update in the UI because the ref changed.

  useEffect(() => {
    // renders.current = 2 dev tool
    // prevName.current = ""
    // ㅋ -> state(name)변경됨.
    // component re-renders
    /*
        Function components are just functions that return some JSX, a render of the component is React calling your function/component and adding the return value to it's virtual DOM - a JavaScript Object representation of the DOM.

        After your component renders then useEffect runs if one of the dependencies has changed from the previous render.

        You are correct in that a ref you get back from useRef will not trigger another render. A ref is a mutable value that persists for the lifetime of the component but will not re render your component. Think of it the same as state but it's not reactive. Any time you update state, you get a re render of your component and the change is reflected in the UI. You can update the value in a ref as much as you want and it will never re render your component, it is none reactive.

        You don't see the current value of the ref in the UI because when you change the ref value it doesn't trigger a re render. So the ref is also the current value 'name' but in  the UI we see the last value that the ref was because changing the ref's value did not trigger a re render of the component.

        If you open you React dev tools you will see that the state and the ref are exactly the same value, it's just in the UI we see the previous value before we changed the ref.
    */
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <h1> Get previous state using useEffect + useRef</h1>
      <h1> 인풋 value 를 useEffect를 통해서, useRef에 저장할 수 있다.</h1>
      <h1> Renders: {renders.current} </h1>
      <h1> prevName: {prevName.current} </h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
