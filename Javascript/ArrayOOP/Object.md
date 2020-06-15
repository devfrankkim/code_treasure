# Object ex) let whoAmI={ developer: "frank"} 1) whoAmI.developer 2) whoAmI["developer"]

```js
var memberArray = ["frank", "andrea", "kim"];
console.log("memberArray[2] : ", memberArray[2]);

var memberObject = {
  manager: "frank", //   "manager": "frank"
  developer: "kim",
  designer: "andrea"
};
// read => 객체에서도 배열처럼 마치 대괄호로 접근할 수 있다.

console.log("memberObject.designer : ", memberObject.designer);
console.log("memberObject.designer : ", memberObject["designer"]);

// update
memberObject.designer = "frank kim";

// delete
delete memberObject.manager;
console.log("after delete memberObject.manager", memberObject.manager);
```

<!-- 차이점
.x
[x] -->
