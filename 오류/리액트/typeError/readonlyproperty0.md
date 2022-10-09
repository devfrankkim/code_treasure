### [Fixed] TypeError: Cannot assign to read only property ‘0’ of object ‘[object Array]’

`https://cnpubf.com/typeerror-cannot-assign-to-read-only-property-0-of-object-object-array/#Also_Read_These_Solutions`

### Solution 1 : Copy the array before sorting it

### Solution 2 : Use react cloneElement()

```js
[...enemies].sort((a, b) => {
  return b.stats.speed - a.stats.speed;
});
```
