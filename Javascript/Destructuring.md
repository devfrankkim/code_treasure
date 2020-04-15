# Destructuring #Examples

```js
const seasonConfig = {
  summer: {
    text: `Come on! it's freaking hot`,
    iconName: "sun"
  },
  winter: {
    text: "DAMN FREEZING!",
    iconName: "snowflake"
  }
};

const { text, iconName } = seasonConfig["summer"];
const { text, iconName } = seasonConfig["winter"];
```
