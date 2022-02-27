## Relational Tables

- Normalizerd Data: Data is not duplicated in the tables.
- DRY: Don't Repeat Yourself.

## No SQL database

- Stores data in collections.
- Individual records in the collections are "Documents"
- Documents have a key value structure that looks like "JSON"
- Ex) `Collection holds all of the data` about user instead of breaking it into related table.

```js
{
    id: Objectid
    username: "frank",
    pwd : "1234",
    rolse: {
        user: 2001,
        editor: 1984
    },
    refreshToken: "qrgdff1qwr214213"
}
```

### Why no sequel databases?

- Performance.
- Flexibility (Adding a new field like adding a new property to an Object)
- Scalability (nosql can support large databases with high request rates at a very low latency - 짧은 대기 시간)
- Usability (get up and running with mongodb in the cloud very fast)

### how to use mongo

- create an account on `mongodb.com`
- create new project
- create cluster
- Database -> Browse Collections
- Add my own data -> set dabase name
- Database access -> Add new database User -> set up db & password
- Database(cluster) -> connect -> set up security -> set up ip address -> choose connection method -> connect your application -> get connection string
- `mongodb+srv://mongotutorial:<password>@cluster0.0uqyu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
- Set up in VS code for .env file
- Install mongoose `npm i mongoose` -> `"mongoose": "^6.2.3",` -> `https://mongoosejs.com/`
- mongoose js is a `library` that makes working with mongo much easier (Like React makes working with JavaScript easier than Vanilla JavaScript)
- Server.js -> declare mongoose -> create connection configuration in config folder
- Create schememas and data models with mongoose -> relate that back to our MongoDB collection.

```js
// .env
// DATABASE_URI=mongodb+srv:mongotutorial:<password>@cluster0.0uqyu.mongodb.net/<DB NAME>?retryWrites=true&w=majority
```

```js
// ./config/dbConn.js
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
```

```js
// Server.js
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn.js");

// Connect to the DB (mongo)
connectDB();

// Only listen to the port if MongoDB is connected.
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
```
