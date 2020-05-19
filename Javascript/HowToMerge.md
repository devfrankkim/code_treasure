# How to merge two arrays in JavaScript

```js
const fruit1 = ["Apple", "banana", "grapes"];
const fruit2 = ["melon", "watermelon"];
```

1. concat (shallow copy)
   : concat returns a new array for us

```js
const combinedArray = fruit1.concat(fruit2);>>>
```

2. spread syntax

```js
const combinedArray2 = [...fruit1, ...fruit2];
```
