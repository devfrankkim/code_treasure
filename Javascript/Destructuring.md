# Destructuring #Examples

[One of the best destructuring info](https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f)

```js
const seasonConfig = {
  summer: {
    text: `Come on! it's freaking hot`,
    iconName: "sun"
  },
  winter: {
    text: "DAMN FREEZING!",
    iconName: "snowflake"
  }
};

const { text, iconName } = seasonConfig["summer"];
const { text, iconName } = seasonConfig["winter"];
```

# Object destructuring with function parameters

```js
const person = {
  name: "Glad Chinda",
  birthday: "August 15"
};

// FUNCTION WITHOUT DESTRUCTURED PARAMETERS
function aboutPerson(person = {}) {
  const { name, birthday, age = "just a few" } = person;

  console.log(
    `My name is ${name} and I'm ${age} years old. I celebrate my birthday on ${birthday} every year.`
  );
}

// FUNCTION WITH DESTRUCTURED PARAMETERS
function aboutPerson({ name, birthday, age = "just a few" } = {}) {
  console.log(
    `My name is ${name} and I'm ${age} years old. I celebrate my birthday on ${birthday} every year.`
  );
}

aboutPerson(person);
```

_Array destructuring can also be used with function parameters in a much similar fashion as object destructuring. However, there are some other ways in which array destructuring can be used for solving common problems._

_A very important use case is in swapping variables. Let’s say we want to search a database for records stored between two dates. We could write a simple function that accepts two "Date" objects: "fromDate" and "toDate" as follows:_

```js
function fetchDatabaseRecords(fromDate, toDate) {
  // ...execute database query
}
```

_We want to ensure that fromDate is always before toDate — hence we want to simply swap the dates in cases where fromDate is after toDate. Here is how we can swap the dates using array destructuring:_

```js
function fetchDatabaseRecords(fromDate, toDate) {
  if (fromDate > toDate) {
    // swap the dates using array destructuring
    [fromDate, toDate] = [toDate, fromDate];
  }

  // ...execute database query
}
```
