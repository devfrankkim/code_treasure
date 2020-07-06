# For of (versatile)

- isNaN() -> checking if "number"
- if(value === 'string' || value instanceof String) -> to check if "string"
- a new way for iterating collections. Its introduced in ES6

### String | Array | Map | Set | arguments object | DOM node collections

```js
const iterableString = "frank";
const iterableArray = ["frank", "andrea", "tessa", "wes"];
const iterableArrayNumber = ["1", "2", "3"];

/* ======================= String ===================== */
for (const valueString of iterableString) {
  console.log(valueString);
}
// "f"
// "r"
// "a"
// "n"
// "k"
/* ======================= Array ======================= */
for (let valueArray of iterableArray) {
  console.log(valueArray);
}
// "frank"
// "andrea"
// "tessa"
// "wes"

for (let valueArrayNumber of iterableArrayNumber) {
  if (typeof valueArrayNumber === "string") {
    console.log(`oh yeah it's string`);
  }
  console.log(isNaN(valueArrayNumber));
  console.log(valueArrayNumber);
}
// "oh yeah it's string"
// false
// "1"
// "oh yeah it's string"
// false
// "2"
// "oh yeah it's string"
// false
// "3"

/* =======================  new Map  ======================= */
const iterableMap = new Map([["frank", 20], ["andrea", 30], ["tessa", 40]]);

for (const entry of iterableMap) {
  console.log(entry);
}
//  ["frank", 20]
//  ["andrea", 30]
//  ["tessa", 40]

for (const [key, value] of iterableMap) {
  console.log(`key: ${key}, value: ${value}`);
}
// key: frank, value: 20
// key: andrea, value: 30
// key: tessa, value: 40

/* ======================  new Set (unique value) ======================== */

const iterable = new Set([
  "andrea",
  "frank",
  "frank",
  "andrea",
  "tessa",
  "frank"
]);

for (const value of iterable) {
  console.log(value);
}
// andrea
// frank
// tessa

/* ======================  new Set (unique value) ======================== */

// You can iterate over the arguments object to examine all of the parameters passed into a JavaScript function:

(function() {
  for (const argument of arguments) {
    if (typeof argument === "number") {
      console.log(argument);
    }
  }
})("frank", "is", 30, "years old making", 6, "figures");

// 30
// 6

/* ====================== DOM collection ======================== */

const articleParagraphs = document.querySelectorAll("article > p");

for (const paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```
