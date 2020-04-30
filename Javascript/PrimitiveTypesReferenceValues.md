# Primitive Types vs Reference Values && deep copy and shallow copy

JavaScript has five primitive types:

1. undefined

   - The undefined type has only one value, undefined.
   - JavaScript uninitialized variables value are undefined.
   - Uninitialized variable(value undefined) equal to null.

2. null

   - null is "nothing"
   - The null type has only one value, null.
   - data type of null is an object
   - It is supposed to be something that doesn't exist

3. Boolean

   - The Boolean type has two values, true and false

4. Number

   - 32-bit integer and 64-bit floating-point values
   - infinity -> isFinite()
   - NaN (Not a Number) -> isNaN()

5. String

   - Using either double quotes("") or single quote('').
   - JavaScript has no character type.

6. Symbol

_What does Primitive Values?
How does this work?
Copy by values_

### Primitives Types

```js
var name = "Kim";
console.log(name); // Kim

var secondName = name;
console.log(secondName); // Kim

name = "Chris";
console.log(secondName); // Kim
```

It has to store somewhere in the memory. on the stack
stack of the data in your memory. it's very limited. doesn't have much space.
it's very fast

Reference => Object(Array)
Store in the HEAP.
Heap is different kind of memory.
unlike stack, it takes a little longer to be accessed.
Therefore, it can hold much more information.
It's perfect for bigger amounts of Data where the Data frequently changes or dynamically.

---

Let's see how STACK works.
the stack holds as the name imples a stack of data.
Lets say we already have some random number and some random text in there.

we store this string 'Max' somewhere in memory or not somewhere actually on top of the stack and we basically know that this variable is accessing this part of the stack.
the data is stacking up.

---

Let's see how HEAP works.
_Stack and Heap work together_
When you make an object or array, you make a new place in the HEAP.

```js
It has two different pointers from different Stacks pointing to the same "address"
var A;
variable A => stack(A pointer) => reference(A)

var B = A
variable B => stack(B pointer) => reference(A)
```

- The memory of the elements are not stored on top of each other.
- It's not managed like a stack. It's managed randomly.(spread out)
- Therefore, each element has it's own address
- This has a POINTER on the STACK which stores the reference(the address) to the object in the HEAP.
  The variable simply stores the POINTER.

\*\* The variable doesn't know the address of the place in the memory where our object is stored. That's the difference to the previous approach

1. BUT the variable knows where the POINTER lies
2. On the STACK, it knows the position of the POINTER on the second POINTER where it simply stores the address of the object in the heap

### Reference values

```js
var person = {
  age: 27,
  name: "Kim",
  hobbies: ["Sports", "Cooking"]
};
console.log(person);

var secondPerson = person;
console.log(secondPerson);

person.name = "Chris";
```

### slice() Shallow Copy for Array

### Object.assign({target, source})

Clone an Object, Merge multiple sources, Merge and overwrite equal keys (shallow copy)

[reference for Object.assign() (1)](https://googlechrome.github.io/samples/object-assign-es6/)  
[reference for Object.assign() (2)](https://appdividend.com/2018/12/27/javascript-object-assign-example-object-assign-tutorial/)

- Object.assign() is useful for merging objects or cloning them shallowly.
- The first argument can be any object, it doesn't have to be a new or empty one!
- we only get the unique properties on the target object.

## Deep copy of an object in Javascript (JSON.parse(JSON.stringify(object)) & Object.freeze()

[reference for JSON](https://appdividend.com/2018/08/17/how-to-parse-json-in-javascript/)

[reference for Object.freeze()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
