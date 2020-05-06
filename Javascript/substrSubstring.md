# substr() VS substring()

length => substr() VS substraction => substring()

- The difference is in the second argument. The second argument to substring is the index to stop at (but not include), but the second argument to substr is the maximum length to return.

- Moreover, substr() accepts a negative starting position as an offset from the end of the string. substring() does not.

```
substr()

start: The position where to start the extraction, index starting from 0.       length: The number of characters to extract (optional).

string.substr(start, length)
```

```js
var s = "JavaScript";
var st = s.substr(4, 7); // "Script"

var s = "JavaScript";
var st = s.substring(4, 7); // "Scr"
```

```
string.substring(start, end)

start: The position where to start the extraction, index starting from 0.
end: The position (up to, but not including) where to end the extraction (optional).
```
