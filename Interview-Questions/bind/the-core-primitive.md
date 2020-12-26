## The Core Primitive

```
First, let's look at the core function invocation primitive, 
a Function's call method[1]. 
The call method is relatively straight forward.
```

1. Make an argument list (argList) out of parameters 1 through the end
2. The first parameter is thisValue
3. Invoke the function with this set to thisValue and the argList as its argument list

```js
function hello(thing) {
  console.log(this);
  console.log(thing);
  console.log(this + " says hello " + thing);
}

hello.call("Frank", "world") //=> Frank says hello world

// String {"Frank"}
// world
// Frank says hello world
```

```
As you can see, we invoked the hello method with this set to "Frank" and a single argument "world". This is the core primitive of JavaScript function invocation. 
You can think of all other function calls as desugaring to this primitive. 
(to "desugar" is to take a convenient syntax and describe it in terms of a more basic core primitive).

```