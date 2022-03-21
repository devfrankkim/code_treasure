import express from "express";
import { Users } from "./Users";
const app = express();

// import cors from "cors";
// app.use(cors());

app.get("/", (req, res) => {
  // response with --> first 10 data
  // cannot search in our client side.
  // write something -> fetch the same datas again and again

  // we can use request and query
  // to fetch data, we are using -> URL
  // we can send any query with URL
  // ?query=adqweweasdsadasd
  // Our server is gonna take the strings and search for it
  // in the DB or json file

  // the question is how are we going to reach to the query

  // ?q=blahblahblah
  // const q = req.query.q;
  const { q } = req.query.q;
  // console.log(q); // "blahblahblah"

  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };

  // ======= MONGO DB =======
  //User model
  // const users = User.find({ $regex: q });

  res.json(search(Users).splice(0, 10));

  // Now, use it in the client side.
});

// if using mongoDB,

// port number
app.listen(5000, () => console.log("API is working!"));
