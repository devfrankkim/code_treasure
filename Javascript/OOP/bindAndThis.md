# bind and this

```
state of javascript
there is no right way to
how do i create CLASS
prototype?
how Object works.
for your problems, for your teams.

JS
Not only OOP language
functional proramming langauge
high order function

basic object
```
### Bind returns a new function

ex)

```js
let dog = {
  sound: "woof",
  talk: function() {
    console.log(this.sound);
  }
};

dog.talk();
let talkFunction = dog.talk; // reassign function => variable
// The same as
let talkFunction = function() {
  console.log(this.sound); // there's no this here. it's just a function
};
let boundFuntion = talkFunction.bind(dog); // binding the object with fucntion
boundFuntion(); // 'woof' => talkFunction is pointing to "dog" object
talkFunction(); // undefined: it's just a function
```

````js
let button = document.getElementById("myNiceButton");

 // "this" isn't going to be a dog but window object BECAUSE it's just a function
button.addEventListener("click", dog.talk);

// bind is forcing 'dog' object to point to  "this" inside the function
// dog.talk("this") => bind.(dog)
button.addEventListener("click", dog.talk.bind(dog)); ```
````
