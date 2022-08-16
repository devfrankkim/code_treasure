## how-to-prevent-automatic-sort-of-object-numeric-property

- https://stackoverflow.com/questions/33351816/how-to-prevent-automatic-sort-of-object-numeric-property

- 키값 숫자 자동 정렬됨.

```js
// how-to-prevent-automatic-sort-of-object-numeric-property

const obj: any = {};
for (let i = 0; i < copyAllBoards.length; i++) {
  obj[copyAllBoards[i][0]] = copyAllBoards[i][1];
  console.log(copyAllBoards[i][0]);
}

Object.fromEntries([
  ["1", []],
  ["3", []],
  ["2", []],
]);

// {1: Array(0), 2: Array(0), 3: Array(0)}
```

### 해결책

- 문자열 더하기.

```js
Object.fromEntries([
  [" 1", []],
  [" 3", []],
  [" 2", []],
]);
// {" 1": Array(0), " 3": Array(0), " 2": Array(0)}
if (value.length !== 0)
  setAllBoards((lists) => {
    return { [value + " "]: [], ...lists };
  });
```
