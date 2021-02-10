
### Array.from


The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.

**Array.from(arrayLike object)**
**Array.from(new Set())**

```js
let set =  new Set(['hello', 'spread operator']);  // Set(2) {"hello", "spread operator"}
[...set]; // (2) ["hello", "spread operator"]

```
```js
   let set = new Set(['welcome', 'to', 'set', 'and', 'Array.from','welcome','welcome']); 
   Array.from(set); // (5) ["welcome", "to", "set", "and", "Array.from"]
```

```js
var distances = [
  { from: "Tahoe City", to: "Nevada City", distance: 65 },
  { from: "Nevada City", to: "Redwood Valley", distance: 151 },
  { from: "Redwood Valley", to: "Willits", distance: 16 },
  { from: "Willits", to: "Garberville", distance: 68 },
  { from: "Garberville", to: "Shelter Cove", distance: 24 },
  { from: "Garberville", to: "Mendocino", distance: 76 },
  { from: "Mendocino", to: "Redwood Valley", distance: 51 }
];

 var cities = new Set();

    distances.forEach(d => {
    cities.add(d.from);
    cities.add(d.to);
    });

console.log(cities); // Set(7) {"Tahoe City", "Nevada City", "Redwood Valley", "Willits", "Garberville", …}

let arrayFrom = Array.from(cities); // (7) ["Tahoe City", "Nevada City", "Redwood Valley", "Willits", "Garberville", "Shelter Cove", "Mendocino"]
```


