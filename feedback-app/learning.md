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
