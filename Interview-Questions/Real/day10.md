# Example of custom hooks

- A Custom Hook is a stateful function that uses other react built-in hooks (e.g. useState, useCallback etc.) that can wrap around the stateful logic that you wanted to gather in one place and avoid copying and pasting the same logic in multiple components.

```js
// Consider the increment/decriment custom hook:
const useCounter = () => {
  const [counter, setCounter] = useState(0);

  return {
    counter, // counter value
    increment: () => setCounter(counter + 1), // function 1
    decrement: () => setCounter(counter - 1), // function 2
  };
};
```

```js
const Component = () => {
  const { counter, increment, decrement } = useCounter();

  return (
    <div>
      <span onClick={decrement}>-</span>
      <span style={{ padding: "10px" }}>{counter}</span>
      <span onClick={increment}>+</span>
    </div>
  );
};
```
