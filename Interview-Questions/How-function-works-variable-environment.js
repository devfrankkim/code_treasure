// When a function gets invoked, execution context gets created.
// The variables inside a function works with local memory ONLY.
// It gets deleted after returning    

var x = 1;
a();  // 10 
b();  // 100
console.log(x); // 1

function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}

// 1) Global Execution Context gets created and gets pushed to call stack
// 2) JS engine checks the memory component  and code component
// 3) They have their own memory spaces and run separately.  
// 4) They are independant