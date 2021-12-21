## Command

- `—-use-npm` > use npm over yarn

## Grammar

**conditions**

```js
showComments ? A : null;
showComments && A;
```

**Prop types**  
**Default props**

- Name of the component + (defaultProps or propTypes)

```js
import PropTypes from "prop-types";

Header.defaultProps = {
  title: "Feedback UI",
  text: "What's the rate?",
};

Header.propTypes = {
  text: PropTypes.number,
};
```

## Adding styles

```
return (
    <header style={{ backgkroundColor: "blue", color: "purple" }}>
    </header>
)
```

```
const headerStyles = {
  backgkroundColor: "blue", color: "purple"
}
return (
    <header style={headerStyles}>
    </header>
)
```

### State

- state > just a data
- component level state
- app level or global state

- component level is just data that is associated with that one specific component.

- React is immutable > state can’t be changed directly
- It has to be reset
- Gotta copy what’s already there and then add your item at the top
- setState previous data (param)

```js
import { useState } from "react";

function FeedbackItem({ item }) {
  const [rating, setRating] = useState(1); // dummy data
  const [text, setText] = useState("This is an example of a feedback item"); // dummy data

  const handleClick = () => {
    setRating((prev) => {
      console.log(prev);
      return prev + 1;
    });
  }; // dummy data

  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button onClick={handleClick}>Button</button>
    </div>
  );
}

export default FeedbackItem;
```

### conditional class

```
function Card({children, reverse}){
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
}

export default Card
```

### conditional styling

```js
function Card({ children, reverse }) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

export default Card;
```

```js
// javaScript
{reverse ? (
   <div className="card reverse">{children}</div>
 ) : (
   <div className="card">{children}</div>
 )}

// conditional class
<div className={`card ${reverse && "reverse"}`}>{children}</div> */

// style
 <div
className="card"
style={{
  backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
  color: reverse ? "#fff" : "#000",
}}
>
```

### PropTypes.arrayOf (PropTypes.shape({ }))

- arrayof: shape of array or what should be included in the object in the array

```js
FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
```

## JavaSCript takeaway grammer

- reduce(prev, next) > adding all together from Array
  ```js
  let average =
    feedback.reduce((prev, next) => {
      return prev + next.rating;
    }, 0) / feedback.length;
  ```
- toFixed() > formats a number using fixed-point notation.

```js
console.log((4.5555).toFixed(1)); // '4.6'
```

- Number() > converts a string or other value to the Number type

```js
Number((4.5555).toFixed(1)); // 4.6
```

- Regular expression > only 1 decimal if any && no decimal if nothing.

```js
(9.0).toFixed(1).replace(/[.,]0$/, ""); // 9
(9.1).toFixed(1).replace(/[.,]0$/, ""); // 9.1
```

- isNaN > determines whether a value is NaN or not
- isNaN('37'); // false: "37" is converted to the number 37 which is not NaN

```js
<h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
```

**use Number.NaN()**

- src: https://medium.com/dailyjs/better-nan-check-with-es6-number-isnan-517861d32be3

```js
// What?? 😱
isNaN("string"); // true
// Better ✅
Number.isNaN("string"); // false
```

- It would be much more accurate to think of NaN as being “invalid number”, “failed number,” or even “bad number,” than to think of it as “not a number.”
- You get NaN when you try to do some mathematical operations on values that are not Numbers.
- NaN is a very special value that never equals to itself.

```js
const value = NaN;
value === NaN; // false
value == NaN; // false
```

- It solves the isNaN false positive problem. Number.isNaN doesn't do any coercion. In other words, it doesn't try to convert the argument's type to a Number type.

**isNaN()**

- String 일때, isNaN('hi') > Number('hi') > NaN > > true
- Remember the intention of the NaN-check, the method is asking: "Does the value equal to NaN? It is NOT asking if the value is equal to "not a number".
- src: https://www.youtube.com/watch?v=7fINXRQoqZI
