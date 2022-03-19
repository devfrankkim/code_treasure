import { useState, useReducer } from "react";
import Students from "./Students";

// dispatch
// action
// reducer
// dispatch가 불리면, reducer 불린다.
// dispatch는 action(내용)을 가지고 있고. 이 action은 2가지를 가지고 있다.
// type, payload(객체 사용가능)
// useReducer -> 배열 반환 -> [초기값, dispatch] = useReducer(reducer,초기값)

// reducer (state, action)
const reducer = (state, action) => {
  // switch문이나 if 문을써서,
  // action(type, payload)를 비교해서 조건문을 걸어준다.

  const newStudent = {
    id: Date.now(),
    name: action.payload,
    isHere: false,
  };

  switch (action.type) {
    case "add-student":
      if (action.payload.length === 0) {
        alert("add name");
        return state;
      }
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case "delete-student":
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };
    case "toggle-student":
      // payload 아이디를 가지고 와서, 루프 돌린 후,
      // student 아이디와 같은 애만 isHere 바꿔주고 나머지는 그대로 놔두고
      // return state 한꺼번에 해주기.

      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };
    default:
      // return 값이 새로운 state다.
      return state;
  }
};

// {count, [{name, id, isHere}]}
const initialize = {
  count: 0,
  students: [],
  // students: [{ id: Date.now(), name: "Frank", isHere: false }],
};

// 루핑 돌리는 데이터. 값을 계산할때 -> 배열변수 = [{}, {}, {}]
// 전체 데이터 모아줄때. -> 전체변수 = {값, 배열변수}

function App() {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, initialize);
  // studentsInfo -> 초기값 -> reducer 에 리턴값. -> return값이 없으면 -> "undefined"
  // dispatch가 불리면 -> reducer가 불린다.

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>출석부</h1>
      <p>총 학생 수 : {studentsInfo.count} </p>
      <input
        type="text"
        placeholder="이름을 알려주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "add-student", payload: name })}>
        추가
      </button>
      <Students students={studentsInfo.students} dispatch={dispatch} />
    </form>
  );
}

export default App;
