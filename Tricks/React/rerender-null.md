### Re-render a page using null

```js
function delete() {
  if (window.confirm("Want to delete?")) {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setWord({
          ...word,
          id: 0,
        });
      }
    });
  }
}

if (word.id === 0) {
  return null;
}
```
