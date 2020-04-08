# Life Cycle method(ComponentDidMount, ComponentDidUpdate, componentWillUnmount)

### componentDidMount => Good place to do data-loading!

ex) when using only one time(current location checking)

### componentDidUpdate => Good place to do more data-loading when state/props change

ex) when a user requests new data.

### componentWillUnmount => Good place to do cleanup(especially for non-React stuff)

Do not do any data-loading inside the Constructor function.
**It is recommended to do it inside tue ComponentDidMount for clean code.**
