```js
import Item from "antd/lib/list/Item";
import React, { useState, ChangeEvent, useEffect } from "react";
import ToDoList from "./components/ToDoList";
import { ITask } from "./interfaces";

type EDIT = {
  item: {
    id?: number;
    taskName?: string;
    deadline?: number;
  };
  edit: boolean;
};

const App = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const [isEdit, setIsEdit] = useState<EDIT>({
    item: {},
    edit: false,
  });

  useEffect(() => {}, [isEdit]);

  // every function should have a return type
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const newFeedback = (): void => {
    const newTask = { id: Date.now(), taskName: task, deadline };
    const newList = todoList.map((item: ITask) =>
      item.id === isEdit?.item?.id ? newTask : item
    );

    setTodoList(newList);
    setIsEdit({ item: {}, edit: false });
  };

  const handleSubmit = (): void => {
    if (isEdit.edit) {
      console.log(isEdit);
      newFeedback();
    }

    if (!isEdit.edit) {
      const newTask = { id: Date.now(), taskName: task, deadline };
      setTodoList([...todoList, newTask]);
    }

    setTask("");
    setDeadline(0);
  };

  const deleteTask = (id: number): void => {
    setTodoList((oldList) => oldList.filter((list) => list.id !== id));
  };

  const editTask = (task: ITask): void => {
    setTask(task.taskName);
    setDeadline(task.deadline);

    setIsEdit({
      item: task,
      edit: true,
    });
  };

  return (
    <div className="app">
      <div className="header">
        <input
          type="text"
          placeholder="Task..."
          name="task"
          value={task || ""}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Deadline (in Days)..."
          name="deadline"
          value={deadline || ""}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>Add Task</button>

        {todoList.map((task: ITask, index: number) => (
          // <ToDoList {...task} key={index} deleteTask={deleteTask} />
          <ToDoList
            task={task}
            key={index}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
```

```js
import React from "react";
import { ITask } from "../interfaces";

type PropsTask = {
  task: ITask,
  // deleteTask: (id?: number) => void; --> error (format)
  isEdit?: {
    item: {},
    edit: boolean,
  },
  deleteTask(id?: number): void,
  editTask(task: ITask): void,
};

const ToDoList = ({ task, deleteTask, editTask }: PropsTask) => {
  return (
    <div>
      <span>{task.taskName}</span>
      <span>{task.deadline}</span>

      <button onClick={() => editTask(task)}>Edit Button</button>

      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
};

export default ToDoList;
```
