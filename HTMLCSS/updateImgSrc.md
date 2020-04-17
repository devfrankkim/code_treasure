# How to update Img src from API

ex)

```js
// if whatever is null, put an empty string into the "FrontImage.src" for safe guard
frontImage.src = data["yes"]["keepgoing"] || "";
backImage.src = data["no"]["nope"] || "";

``;
```
