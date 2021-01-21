# arrow fucntion examples

```js
function messageNormal() {
  return "normal function message";
}

var messageArrow = () => "arrow message";

console.log(messageNormal()); // normal function message
console.log(messageArrow()); // arrow message
```

```js
function messageNormal(value) {
  return `Normal ${value}`;
}

var messageArrow = value => `Arrow ${value}`;

console.log(messageNormal("testing")); // Normal testing
console.log(messageArrow("testing")); // Arrow testing
```

```js
document.addEventListener("click", function() {
  console.log("clicked");
});

document.addEventListener("click", () => console.log("clicked"););
```

```js
const people = [
  {
    firstName: "Frank",
    lastName: "Kim"
  },
  {
    firstName: "Andrea",
    lastName: "Kim"
  }
];

console.log(
  people.map(function(person) {
    return person.firstName;
  })
);
// (2) ["Frank", "Andrea"]

console.log(people.map(person => person.lastName)); // (2) ["Kim", "Kim"]
```

## This

**setTimeout=> Happens once**
**setInterval=> infinite**

```js
let time = 1000;
function stopWatch() {
  let self = this; // Solution 1 => make a variable for "this"
  this.time = 0;

  // who's calling me? where is he?
  setInterval(function() {
    this.time++;
    console.log(this.time, "normal"); // NaN
  }, 1000);

  setTimeout(() => {
    this.time++;
    console.log(this.time + "arrow"); // 1
  }, 2000);
}

let timer = new stopWatch();
```

### binding

```js
let time = 0;

const arrowFuc = () => {
  let time = 100;
  console.log(this.time);
};

function normalFuc() {
  let time = 10;
  console.log(this.time);
}

console.log(arrowFuc()); // undefined
console.log(normalFuc()); // undefined

let bindingSavesFunction = {
  time: 10000000
};

let angel = normalFuc.bind(bindingSavesFunction);
console.log(angel()); //  10000000
```

```js
let lion = {
  habit: {
    cry: "wahhhhhahhhh",
    lives: 100,
    answer: function() {
      console.log(this.cry);
      let livesFun = () => console.log(this.lives);
      return livesFun();
    }
  }
};

console.log(lion.habit.answer()); // wahhhhhahhhh, 100
```

#### Summary

**With arrow functions the "this" keyword**
**Always represents the OBJECT THAT DEFINED the arrow function.(Parent's scope)**

**normal function => Who's calling?**
**arrow function => Parent's scope(it will lexically go up a scope, and use the value of this)**
