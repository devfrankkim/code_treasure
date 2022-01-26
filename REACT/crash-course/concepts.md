```js
useState([{ id: 1, text: "mutable" }]);
```

- state is mutable
- Shouldn't use tasks.push()
- It's not something we should directly change.
- Need to re-create it and send it down. > 1 way data
- Better to use the global state so that we can pass it down. (Alternatives: Context API, Redux)
- State > pass down && action > pass up

```js
return setTasks([...tasks, {}]);
```

- 컴포넌트 level state & App level state

==========================================

```js
//**App.js**
const deleteTask = (id) => {
    console.log('delete', id) // delete, syntheticBaseEvent
}
return <Tasks onDelete={deleteTask}>
```

```js
// **Tasks.js**
const Tasks = ({onDelete}) => {
    return <Task onDelete={onDelete}>
}
```

```js
// **Task.js**
const Task = ({ onDelete }) => {
  return <button onClick={onDelete}>X</button>;
};
```

==========================================

```js
import {useState} 'react'

const [text, setText] = useState('')
const [reminder, setReminder] = useState(false)

<input
  value = {text}
  onChange = {(e) => setText(e.target.value)}
/>

// - e.currentTarget.checked > false or true (Checked or not)
<input
  value = {reminder}
  onChange={(e) => setReminder(e.currentTarget.checked)}
/>
```

==========================================

```js
// **App.js**

const addTask = (task) => {
  console.log(task)
}
return(
  <AddTask onAdd={addTask}>
)
```

```js
const AddTask = ({onAdd}) => {

  return(

  )
}
```
