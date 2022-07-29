### type vs interface

`interface에서 할 수 있는 대부분의 기능들은 type에서 가능하지만, 한 가지 중요한 차이점은 type은 새로운 속성을 추가하기 위해서 다시 같은 이름으로 선언할 수 없지만, interface는 항상 선언적 확장이 가능하다는 것입니다.`

`성능을 위해서는 interface를 사용하는 것이 좋다.`

```
Type Alias와 Interface의 차이점
Type Alias와 Interface를 살펴보았을 때 서로 대부분의 기능을 공유하고 있습니다.
언뜻 보면 ‘둘을 왜 구분해놓았을까?’ 라고 생각하실 수도 있습니다.

그런데 둘의 큰 차이가 하나 있습니다.
Interface는 선언 병합이 가능하지만, Type Alias는 그렇지 않습니다.
```

`https://dev.to/ridhoanshory/interface-vs-type-in-typescript-4ca0`
