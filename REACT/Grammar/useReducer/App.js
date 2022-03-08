import React, { useState, useReducer } from "react";
import TodoReducer from "./TodoReducer";
// what is useReducer : works like useState -> good for complex states (nested components)
// why are we using this? why do we need this?

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newToDo(action.payload.name)]; // name??? -> no access to that inside this reducer funciton -> dispatch 통해서 state 운송 받아옴.
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newToDo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function App() {
  // const [count, setCount] = useState(0);
  // const [state, dispatch] = useReducer(reducer, { count: 0 }); // [Fn: perform on our state to get new state, initial value] usually use object
  const [todos, dispatch] = useReducer(reducer, []); // [Fn: perform on our state to get new state, initial value] usually use object
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    // payload : Contains all of the variable values we need to perform the action.
    // input 으로 부터  날라 오는 값을 저장해줌. payload는 convention.
    // dipatch -> 운송 수단 (action type, action state) -> 함수에게 전달 -> 함수에서 전달 받으면, action을 실시함.
    // type variable is getting passed in to dispatch(), passing in another parameter which is payload
    setName("");
  }
  console.log(todos);
  // function handleClick(e) {
  //   dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { name: name } });
  // }

  /* <button onClick={handleClick}>Click</button> */

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <TodoReducer key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}

export default App;

// const ACTIONS = {
//   INCREMENT: "increment",
//   DECREMENT: "decrement",
// };

// function reducer(state, action) {
//   // action for multiple states
//   switch (action.type) {
//     case ACTIONS.INCREMENT:
//       return { count: state.count + 1 };
//     case ACTIONS.DECREMENT:
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// const increment = () => {
//   dispatch({ type: ACTIONS.INCREMENT });
// };

// const decrement = () => {
//   dispatch({ type: ACTIONS.DECREMENT });
// };

// const increment = () => {
//   setCount((prev) => prev + 1);
// };

// const decrement = () => {
// setCount((prev) => prev - 1);
// };

/* <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button> */

/* <button onClick={decrement}>-</button>
<span>{state.count}</span>
<button onClick={increment}>+</button> */
