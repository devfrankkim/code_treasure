# Life Cycle method(ComponentDidMount, ComponentDidUpdate, componentWillUnmount)

DOCUMENT는 data loading을 constructor가 아닌 componentDidMount에서 하라고 권장한다.

### componentDidMount => Good place to do data-loading!

ex) when using only one time(current location checking)
한번만 하면 좋다.

### componentDidUpdate => Good place to do more data-loading when state/props change

prop, state 바뀔 때, 사용. click 등.

ex) when a user requests new data.

### componentWillUnmount => Good place to do cleanup(especially for non-React stuff)

Do not do any data-loading inside the Constructor function.
**It is recommended to do it inside tue ComponentDidMount for clean code.**
