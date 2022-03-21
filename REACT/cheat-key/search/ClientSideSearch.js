// dispatch
// action
// reducer
// dispatch가 불리면, reducer 불린다.
// dispatch는 action(내용)을 가지고 있고. 이 action은 2가지를 가지고 있다.
// type, payload(객체 사용가능)
// useReducer -> 배열 반환 -> [초기값, dispatch] = useReducer(reducer,초기값)

// 루핑 돌리는 데이터. 값을 계산할때 -> 배열변수 = [{}, {}, {}]
// 전체 데이터 모아줄때. -> 전체변수 = {값, 배열변수}

import { useState } from "react";
import { Users } from "./api/Users";
import Table from "./Table";

function ClientSideSearch() {
  const [query, setQuery] = useState("");

  // const filterArray = (data) => {
  //   return data.filter(
  //     (user) =>
  //       user.first_name.toLowerCase().includes(query) ||
  //       user.last_name.toLowerCase().includes(query) ||
  //       user.email.toLowerCase().includes(query)
  //   );
  // };

  // some() --> 요소가 하나라도, 배열 내 존재하는 경우 true를 반환합니다.
  const keys = ["first_name", "last_name", "email"];

  console.log(Users[0]["first_name"]);
  const filterArray = (data) => {
    return data.filter(
      (user) => keys.some((key) => user[key].toLowerCase().includes(query))
      // user['first_name'].toLowerCase().includes(query)
      // user['last_name'].toLowerCase().includes(query)
      // user['email'].toLowerCase().includes(query)
    );
  };

  return (
    <div className="app" style={{ margin: "50px" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search.."
        className="search"
      />
      <Table data={filterArray(Users)} />
    </div>
  );
}

export default ClientSideSearch;
