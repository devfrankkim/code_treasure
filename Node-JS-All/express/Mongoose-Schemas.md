## Mongoose Schemas

- Using mongoose to connect to MongoDB.
- Everything in Mongoose starts with a Schema.
- `Each schema maps to a MongoDB collection` and defines the `shape of the documents` `within that collection`.
- 각각의 스키마는 MongoDB 콜렉션과, 매핑을 한다.
- 그 후, 콜렉션(collection)에서 document shape을 정의한다.
- 각 스키마와 디비 매핑하고 나서, 콜렉션과 document shape이 정해진다.
- https://mongoosejs.com/docs/guide.html#definition

```js
import mongoose from "mongoose";
const { Schema } = mongoose;

// each field: data type inside of the document (data model)
const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  // option 가능하다.
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});
```

### The permitted SchemaTypes are:

- String
- Number
- Date
- Buffer
- Boolean
- Mixed
- `ObjectId` -> automatically created for us. Don't have to specify ID
- Array
- Decimal128
- Map

==========================================

- When you call mongoose.model() on a schema, Mongoose compiles a model for you.
- The first argument is the singular name of the collection your model is for.
- Mongoose automatically looks for the plural, lowercased version of your model name.
- Thus, for the example below, the model Tank is for the tanks collection in the database.

```js
const schema = new mongoose.Schema({ name: "string", size: "string" });
const Tank = mongoose.model("Tank", schema);
```
