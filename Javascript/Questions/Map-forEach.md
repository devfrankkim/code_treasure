## Map() vs forEach()


### forEach() method doesn’t actually return anything (undefined) -> Change original array

### Map() creates new array

### Note that you would never return from a forEach function as the return values are simply discarded:

### map() might be preferable when changing or altering data. Not only is it faster but it returns a new Array. This means we can do cool things like chaining on other methods ( map(), filter(), reduce(), etc.)


- [x] Just about anything you can do with forEach() you can do with map(), and vise versa.
- [x] map() allocates memory and stores return values. forEach() throws away return values and always returns undefined.

- [x] forEach() will allow a callback function to mutate the current array. map() will instead return a new array.


```js
let arr = [1, 2, 3, 4, 5];
arr.forEach((num, index) => {
    return arr[index] = num * 2; // undefined
});

console.log(arr); (5) [2, 4, 6, 8, 10]

let mapNewArray = arr.map(num => {
    return num * 2;
});

mapNewArray// (5) [4, 8, 12, 16, 20]
arr //  (5) [2, 4, 6, 8, 10]


```
```
Functional Considerations
It’s important to also understand that using map() may be preferable if you favor functional programming.
This is because forEach() affects and changes our original Array, whereas map() returns an entirely new Array — thus leaving the original array unchanged.
```
```
Which is better?     

That depends on what you’re trying to accomplish.       
forEach() may be preferable when you’re not trying to change the data in your array,     
 but instead want to just do something with it — like saving it to a database or logging it out:       
```


```js
let arr = ['a', 'b', 'c', 'd'];
arr.forEach((letter) => {
    console.log(letter);
});
// a
// b
// c
// d

```