const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

// add "!" to all the items
array.map((obj) => {
  obj.username = obj.username + "!";
  obj.team = obj.team + "!";
  obj.score = obj.score + "!";
  obj["items"].forEach((value, index) => {
    obj["items"][index] = value + "!";
  });
});

// add "!" to the end of each items they own

const answer = array.map((user) => {
  user.items = user.items.map((item) => {
    return item + "!";
  });
  return user;
});

console.log(answer);

// ==== Object Converter to Array ====
// Object.keys() - key
// Object.entries() - key & value

// for (let [key, value] of Object.entries(obj)) {
//   console.log(("key: ", key, "value: ", value));
// }

// ===== Object Looping =====
// Object.assign({}, Object.keys(obj));

array.map((obj, index) => {
  let information = Object.assign({}, Object.keys(obj));
  console.log(information);
});
// {0: "username", 1: "team", 2: "score", 3: "items"}
