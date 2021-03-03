let database = [
  {
    username: "Frank",
    password: "soon",
  },
  {
    username: 1234,
    password: 1234,
  },
  {
    username: "Frank",
    password: 1234,
  },
  {
    username: 1234,
    password: "frank",
  },
];

let newsfeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning!",
  },
  {
    username: "Sally",
    timeline: "Javascript is sooooo cool!",
  },
  {
    username: "Mitch",
    timeline: "Javascript is preeetyy cool!",
  },
];

let userName = prompt("Enter username");
let userPW = prompt("Enter password");

function isUserValid(userName, userPW) {
  for (let i = 0; i < database.length; i++) {
    if (
      database[i].username.toString() === userName.toString() &&
      database[i].password.toString() === userPW.toString()
    ) {
      return true;
    }
  }
  return false;
}

function signIn(userName, userPW) {
  if (isUserValid(userName, userPW)) {
    console.log(newsfeed);
  } else {
    alert("sorry, wrong name & pw");
    let userName = prompt("username again");
    let userPW = prompt("password again");

    signIn(userName, userPW);
  }
}

signIn(userName, userPW);

let amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100,
};

function checkBasket(basket, lookingFor) {
  for (item in basket) {
    if (item === lookingFor) {
      console.log(
        `${lookingFor} is in your basket. How many ${basket[lookingFor]}`
      );
    }
  }
  return "that does not exist in your basket";
}

checkBasket(amazonBasket, "books");
