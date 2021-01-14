## JS Engine Architecture (Environment)

### JavaScript Runtime Environment 

- JavaScript engine is the heart of JavaScript Runtime Environment 
  
- JS Runtime Environment includes ---> **JavaScript Engine, APIs to connect outter environemtn, Event Loop, Micro Task Queue, Callback Queue**
- **This is impossible without JavaScript Engine**
- **Browsers can only run JavaScript code just because of JavaScript Runtime Environment**
- **Every Browser has JavaScript Runtime Environment**

***How about Node Js then?***

- It also has JavaScript Runtime Environment
- It can run JS code outside the browsers

`If you want to run JavaScript code in other machines, you need the JavaScript Runtime Environment`

- ex) If you want to run JavaScript Code in WATER COOLER, you need JavaScript Runtime Environment in WATER COOLER(JS Engine, APIs)
- It can have JavaScript Engine 
- APIs(getting water) can be different in the WATER COOLER
- You can use JS code through Global Object(Window) -> Get different Water Level API
- APIs give super power so we can use it in JS code

**The APIs look very different inside Node JS and Browser ex) setTimeout**
**You can access outside environment through APIs and you can run JS code inside JavaScript Runtime Environment**


- JavaScript Engine is not a machine
- JS Engine takes the code as input 

**The code we write in JavaScript -> JS Engine -> 3 Major steps**
1. Parsing
2. Compliation
3. Execution

### Parsing
[AST](astexplorer.net)  -> generates AST

- The code we write is broken down into Tokens

- Token: let | a | = | 10
- Syntax Parser ----> Take the code and convert it to AST
- AST: Abstract Syntax Tree 

### Compliation 

- (Just In Time Compliation)
- JIT Compliation

***Complier vs Interpreter***

***How about JavaScript?***

- Interpreter --> it takes your code, it starts executing the code line by line, it does NOT know what will hapen in the next line. This is how all the codes get executed. The code gets executed fast. It doesn't have to wait to be complied first. It can immediately start executing line by line.

- Compiler --> your whole codes complied first even before executing. It gets optimized and a new form gets created, and then they are executed. Your original codes are modified and the new version is optimized which runs very FAST, it has lots of performance improvements. More efficiency 

- A compiled language: The source code is passed through a program called a compiler, which translates it into bytecode that the machine understands and can execute.

- JavaScript can behave like an interpreted language and compiled language. EVERYTHING depends on the JavaScript Engine


### JavaScript language: JIT Compilation

- JavaScript is an interpreted language, which means the code gets turned into machine code and executed on runtime. ...
  
-  Compiled languages need to be turned into machine code only once (during compilation), while interpreted languages get turned into machine code every single time a script needs to run.

- JavaScript was supposed to be an interpreted language at first
- However, most of modern JavaScipt engines use use both `interpreter & compiler` together

JavaScript Engine: Interpreter + Compiler ---> Just In Time Compiled language to execute codes

### JIT Compilation
- Parsing (AST: Abstract Syntax Tree ) ---> Interpreter(high level code) convert ----> bytecode -----> Execution Step

- Compiler talks to the Interpreter while the code is being interpreted line by line and the Compiler also basically tries to optimize the code as much as it can on the RUNTIME.

### Execution (Memory Heap && Call Stack)
- This will NOT happen without the two components of JavaScript Engine (Memory Heap & Call Stack)

- Memory Heap: All the memories are stored in here. ex) call stack + garbage collector + other things work together
- All the variables + functions are assigned here.


- Garbage Collector: free up memory space from Memory Heap whenever possible. It collects all the garbage (Mark & Sweep)

### JavaScript Runtime 
- It has JavaScript Engine
- JavaScript Engine has Call Stack(execution contexts coming in and popping out)
- CODE ---> RUNTIME ---> JS Engine ---> Parsing (Tokens are generated) ---> Syntax Parser converts them to AST(tree) ---> Compliation (Pass AST(tree) to JIT comilation (Interpreter & Compiler))  --->  Execution (Interpreter procudeces BYTECODE)  ---> with help of (Memory Heap & Call Stack)

***Compiler consistently works on optimizing code as much as possible + Garbage Collector(collecting garbage and optimizing the memory space)***

```
1. Mark and Sweep
2. Inling
3. Copy Elision
4. Inline Caching
5. ECMAScript
6. Ignition Interpreter
7. TurboFan Optimising Compiler
8. Orinoco Garbage Collector
```

ex) Google
- JavaScript Source Code 
- Interpreter(ignition)
- Compiler(Turbo) --> compiling code very fast
- Bytecode -> Execution 



***Mark-and-sweep algorithm: connect each objects to root source. any object doesn't connect to root or other object. this object will be removed.***


```
https://www.tutorialspoint.com/explain-in-detail-about-mark-and-sweep-algorithm-in-javascript

Mark and Sweep algorithm looks out for objects 'which are unreachable' rather than 
objects 'which are no longer needed'. This algorithm is the improvement of Reference-counting algorithm.
```








