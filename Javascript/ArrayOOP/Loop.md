### 배열은 저장된 순서인 인덱스 번호를 사용하고, 객체는 값의 이름을 직접 지정하여 사용한다.

### Interesting Array(value, reference) and make values inside the Array

```js
var a = [(v100 = 100), (v200 = 200)];
console.log(a); // [100, 200]
console.log(v100, v200); // 100, 200

let b = [(love = 100), (haha = 200)];
console.log(a); // [100, 200]
console.log(love, haha); // 100, 200

console.log(a === b); // false

console.log(v100 === love); // true
console.log(v200 === haha); // true
```

### 배열 반복문 while

```js
var memberArray = ["frank", "andrea", "kim"];
console.group("array loop");
var i = 0;
while (i < memberArray.length) {
  console.log(i, memberArray[i]);
  i++;
}
console.groupEnd("array loop");
```

### 객체 반복문 for in: for(variable in Object)

```js
var memberObject = {
  // 객체 사용 방법. 1) memberObject.manager 2) memberObject["manager"]
  manager: "frank", // "manager": "frank"
  developer: "kim",
  designer: "andrea"
};

// How to call objects different ways
for (var name in memberObject) {
  console.log(name, memberObject["name"]); // name isn't defined in the Object => undefined
}

for (var name in memberObject) {
  console.log(name, memberObject[name]); // variable, ["value"]
  // varialbe, [variable], ["value"]
  // memberObject["manager"];
}

for (var name in memberObject) {
  console.log(name, memberObject.name); // name isn't defined in the Object => undefined
}

memberObject[manager]; // manager is not defined
memberObject["manager"]; // "frank"
```

```js
var memberObject = {
  manager: "frank", //   "manager": "frank"
  developer: "kim",
  designer: "andrea"
};

console.group("object loop");
for (var name in memberObject) {
  console.log(name);
}

console.groupEnd("object loop");

// read => 객체에서도 배열처럼 마치 대괄호로 접근할 수 있다.

console.log("memberObject.designer : ", memberObject.designer);
console.log("memberObject.designer : ", memberObject["designer"]);

// update
memberObject.designer = "frank kim";

// delete
delete memberObject.manager;
console.log("after delete memberObject.manager", memberObject.manager);
```
