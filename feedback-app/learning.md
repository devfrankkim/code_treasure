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
