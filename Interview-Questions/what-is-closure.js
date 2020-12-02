// It still remembers the reference 
// a function along with the scope 
// The closure enclosed 1)function along with its 2)lexical scope that was returned
// Function along with its lexical scope bundle together forms a closure

function x(){
    let a = 10;
    function y(){
          console.log(a);
    }    
    
    a = 1000;
    return y
}
let z = x()
console.log(z()); // 1000;  a is reference



// y forms a closure along with the scope of x and the scope of z
// memory location of a, b won't be garbage collected
/*
    Closure (x) 
    a: 7  // parent 
    Closure (z)
    b: 900 // parent of the parent
*/
function z(){
    let b = 900;
    function x(){
        let a = 7;
        function y(){
          console.log(a, b)
        }
      y();
    }
    x();
}
z();