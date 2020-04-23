# Adding, Removing & Toggling Classes With classList in JavaScript

## JavaScript won't complain if you try to remove a class that doesn't exist.

## Using "!!" in front of an expression coerces the value to a boolean.

```js
<div class="cool new shades">🕶️</div>;

let shadesEl = document.querySelector(".cool");

console.log(shadesEl.classList);
// ["cool", "new", "shades", value: "cool new shades"]

console.log(shadesEl.classList[1]); // new
```

This works, but we should instead call one of the following methods on the _classList_ object:

### add

```js
shadesEl.classList.add("make", "me", "look", "rad");

Result => <div class="cool new shades make me look rad">🕶️</div>;
```

### contains

Contains returns a boolean indicating if the class is present:

```js
console.log(shadesEl.classList.contains("look")); // true
```

### item

Get the class that’s at the provided index:

```js
console.log(shadesEl.classList.item(3)); // make
```

### remove

Remove one of more classes:

```js
shadesEl.classList.remove("cool", "make", "me");
<div class="new shades look rad">🕶️</div>;
```

### toggle

Instead of doing a whole dance like this if you want to toggle a class on or off:

```js
// Tedious toggle
if (shadesEl.classList.contains("rad")) {
  shadesEl.classList.remove("rad");
} else {
  shadesEl.classList.add("rad");
}
```

…you can simply use classList.toggle instead. Say something like this on a button click:

```js
coolButton.addEventListener("click", () => {
  shadesEl.classList.toggle("cool");
});
```

#### classList.toggle will return true if the class was added and false if it was removed:

```js
let a = shadesEl.classList.toggle("cool");

console.log(a); // true --> class was added
```

_classList.toggle_ optionally takes a second argument that should evaluate to a boolean. This will force toggle to either add the class or remove it depending on the _how the second argument evaluates_:

```js
let someCondition;

let b = shadesEl.classList.toggle("cool", !!someCondition);
console.log(b);
// false,
//`someCondition` is undefined and evaluates to false, class is removed

someCondition = "I wear my sunglasses at night";

let c = shadesEl.classList.toggle("cool", !!someCondition);
console.log(c);
// true,
//`someCondition` evaluates to true, class is added.
```
