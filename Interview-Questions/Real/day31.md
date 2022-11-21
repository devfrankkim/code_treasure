## What are tasks in event loop

- The event loop concept is very simple. There’s an endless loop, where the JavaScript engine waits for tasks, executes them and then sleeps, waiting for more tasks.

### The general algorithm of the engine:

- While there are tasks:
  execute them, starting with the oldest task.
  Sleep until a task appears, then go to 1.

\*Two more details:

- Rendering never happens while the engine executes a task. It doesn’t matter if the task takes a long time. Changes to the DOM are painted only after the task is complete.
- If a task takes too long, the browser can’t do other tasks, such as processing user events. So after a time, it raises an alert like “Page Unresponsive”, suggesting killing the task with the whole page. That happens when there are a lot of complex calculations or a programming error leading to an infinite loop.

### Use-case 1: splitting CPU-hungry tasks

```js
/*
Let’s say we have a CPU-hungry task.

For example, syntax-highlighting (used to colorize code examples on this page) is quite CPU-heavy. To highlight the code, it performs the analysis, creates many colored elements, adds them to the document – for a large amount of text that takes a lot of time.

While the engine is busy with syntax highlighting, it can’t do other DOM-related stuff, process user events, etc. It may even cause the browser to “hiccup” or even “hang” for a bit, which is unacceptable.

We can avoid problems by splitting the big task into pieces. Highlight first 100 lines, then schedule setTimeout (with zero-delay) for the next 100 lines, and so on.

To demonstrate this approach, for the sake of simplicity, instead of text-highlighting, let’s take a function that counts from 1 to 1000000000.

If you run the code below, the engine will “hang” for some time. For server-side JS that’s clearly noticeable, and if you are running it in-browser, then try to click other buttons on the page – you’ll see that no other events get handled until the counting finishes.
*/
let i = 0;

let start = Date.now();

function count() {
  // do a heavy job
  for (let j = 0; j < 1e9; j++) {
    i++;
  }

  alert("Done in " + (Date.now() - start) + "ms");
}

count();
```

```js
// The browser may even show a “the script takes too long” warning.
// Let’s split the job using nested setTimeout calls:

let i = 0;

let start = Date.now();

function count() {
  // do a piece of the heavy job (*)
  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    alert("Done in " + (Date.now() - start) + "ms");
  } else {
    setTimeout(count); // schedule the new call (**)
  }
}

count();
// Now the browser interface is fully functional during the “counting” process.

// A single run of count does a part of the job (*), and then re-schedules itself (**) if needed:

// 1. First run counts: i=1...1000000.
// 2. Second run counts: i=1000001..2000000.
// 3. …and so on.
```
