let obj = {
  my: "name",
  is: "Frank",
  the: "developer",
};
// to this:
("my name is Frank the developer");

Object.entries(obj)
  .map((value) => value.join(" "))
  .join(" ");

let arr = [];
Object.entries(obj).forEach((v) => arr.push(`${v[0]} ${v[1]}`));
arr.join(" ");

const startLine = "     ||<- Start line";
let turtle = "🐢";
let rabbit = "🐇";

// it should look like this:
("     ||<- Start line");
("       🐢");
("       🐇");

turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

turtle = turtle.trim().padEnd(9, "=");

("     ||<- Start line");
("🐢=======");
("       🐇");

let userName = {
  username1: "frank",
  username2: "kim",
  username3: "andrea",
};

Object.entries(userName).forEach((key, index) => console.log(key));

Object.entries(userName).map(
  (value) => value[1] + value[0].replace("username", "")
);
// (3) ["frank1", "kim2", "andrea3"]
