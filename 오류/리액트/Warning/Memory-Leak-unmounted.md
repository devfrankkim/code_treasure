## Warning: Can't perform React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

### This way you are making sure that if your component is unmounted, you are NOT trying to fetch something.

- 언마운트 된 후엔, 전에 작업과 다음 작업이 헷갈리지 않게 해야한다.

- When you return a function from useEffect, that function will will be executed when the component unmounts. So taking advantage of that, you set your state to an empty. Doing this, whenever you leave that screen or the component unmounts, the state will be empty, so the `components of your screen won't be trying to re-render again`. I hope this helps

- 소스 : https://stackoverflow.com/questions/54954385/react-useeffect-causing-cant-perform-a-react-state-update-on-an-unmounted-comp

```js
const [state, setState] = useState({});

useEffect(() => {
  myFunction();
  return () => {
    setState({}); // This worked for me
  };
}, []);

const myFunction = () => {
  setState({
    name: "Jhon",
    surname: "Doe",
  });
};
```

```js
import { useEffect, useState, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
        }
        setCheckingStatus(false);
      });
    }

    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return { loggedIn, checkingStatus };
};

// Protected routes in v6
// https://stackoverflow.com/questions/65505665/protected-route-with-firebase

// Fix memory leak warning
// https://stackoverflow.com/questions/59780268/cleanup-memory-leaks-on-an-unmounted-component-in-react-hooks
```
