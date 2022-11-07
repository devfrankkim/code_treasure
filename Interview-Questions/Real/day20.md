## What is a microTask queue

- Microtask Queue is the new queue where all the tasks initiated by "promise objects" get processed before the callback queue. The microtasks queue are processed before the next rendering and painting jobs. But if these microtasks are running for a long time then it leads to visual degradation.

* initiated by promimse objects
* before the callback queue
* before rendering and painting jobs
* if these microtasks are running for a long time => visual degradation
