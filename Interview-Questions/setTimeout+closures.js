// https://www.freecodecamp.org/news/thrown-for-a-loop-understanding-for-loops-and-timeouts-in-javascript-558d8255d8a4/
// Thrown for a loop: understanding for loops and timeouts in JavaScript
/*
The call stack
There’s only one call stack in JavaScript, and this will become important as we continue to build our foundation.

Web APIs
Many web APIs allow us to listen or wait for something to occur. 
When that event occurs, we then run some other code.

*/

console.time('myTimer');
for(var i = 1; i < 6; i++) {
   console.log('Loop Number' + i); // added this
   setTimeout(()=>{
      console.log(i);
   },1000);
}
console.log('The loop is done!');
console.timeEnd('myTimer');