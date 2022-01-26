```js
useState([{ id: 1, text: "mutable" }]);
```

- state is mutable
- Shouldn't use tasks.push()
- It's not something we should directly change.
- Need to re-create it and send it down. > 1 way data
- Better to use the global state so that we can pass it down. (Alternatives: Context API, Redux)

```js
return setTasks([...tasks, {}]);
```
