# What is "this" inside functions? How can we use functions?

### Functions are just values. They live on their own. They can be passed around

### Functions can be places as a property inside an Object

### Functions can be assigned to a variable

### Functions can be passed as an argument to other functions

1. Is the function called with new (new binding)? If so, this is the newly constructed object.

2. Is the function called with call or apply (explicit binding), even hidden inside a bind hard binding? If so, this is the explicitly specified object.

3. Is the function called with a context (implicit binding), otherwise known as an owning or containing object? If so, this is that context object.

4. Otherwise, default the this (default binding). If in strict mode, pick undefined, otherwise pick the global object.

```
global object => Node
window object => browswer
```

```js
function talk(sound) {
  console.log(sound);
}
talk("wooooof");
```

```js
let talk = function() {
  console.log(this.sound); // Window
};

let tessa = {
  speak: talk,
  sound: " WHATTS UP "
};

let andrea = {
  //   yehey: tessa.speak.bind(tessa), // what's up
  yehey: tessa.speak
    sound: "My precious......."
};

andrea.yehey(); // My precious.......

// passing a function through JavaScript
tessa.speak(); // WHATTS UP

let wesley = tessa.speak; // this.sound
console.log(wesley()); // undefined or window

let wesleySpeak = tessa.speak.bind(tessa);
let wesleySpeaking = talk.bind(tessa);
console.log(wesleySpeak()); // WHATTS UP
console.log(wesleySpeaking()); // WHATTS UP

// function + object
// return A function
let tessaSound = talk.bind(tessa);

talk(); // undefined
tessaSound(); // WHATTS UP
```
