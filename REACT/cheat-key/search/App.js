// in real life, we never fetch thousands of records.
// too expensive to fetch data in that way.

// client side: if user wants to reach other records,
// they can just use pagination or infinite scroll or only the search button
// ex)
// We are gonna fetch specific 10 datas and use input tag
// search for any letters
// fetch again and again

import { useEffect, useState } from "react";
import Table from "./Table";
import axios from "axios";

// use input -> take it as query -> change input -> fetch again for query only

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      // const res = await axios.get("http://localhost:5000");
      // writing the first letter or second letter is not commong usage.
      // write limit -> first & two are just gonna ignore.
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };

    if (query.length === 0 || query.length > 2) fetchUsers();
  }, [query]);

  return (
    <div className="app" style={{ margin: "50px" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search.."
        className="search"
      />
      <Table data={data} />
    </div>
  );
}

export default App;
