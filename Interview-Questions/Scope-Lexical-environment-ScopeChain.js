// Scope in JavaScript is directly dependant on the lexical environment

function a() {
    // console.log(b);
    var b = 10;
    function c(){
        console.log(b);
    }
    c()
}

// var b = 10;
a();

// Scope(self-room) means where you can access specific variables or functions in the code 
// (1) what is the scope of the variable? -> where can I access the variable?
// (2) is the variable inside the scope of the function -> Can I access the variable inside the function?


// when you invoke a funciton, execution context gets created
// What is lexical environment?

// variable & execution context created -> lexical environment is also created 



// : local memory that is lexically sitting inside of the parent
// : local memory along with lexical environment of the parent


// sequence 


// function c is lexically sitting inside function a 
// function c is lexically inside function a 
// In hierarchy - in order 
// where the specific code is present physically  

// function a is lexically inside global scope

function a () {
    var b = 10;
    c()
    function c(){

    }
}
a();

// ====== what is scope chain? ======
// if JS engine does not find anything in local memory -> 
// it goes to the next level of the scope chain -> 
// it goes to the next level of the scope chain -> 
// until global scope and find nothing (not defined)

// ====== lexical environment is created whenever the execution context is created ======
// ====== lexical environment is local memory + reference to lexical environment of lexical parents ======
// ====== lexical parents mean where the actual function sits inside the code ======
/*
    ex) global(lexical parent) >>> b(lexical parent) >>> a 

    function b(){
        function a(){            
        }
    }

*/
// ====== lexical environment: memory + reference to lexical environment of the parents(SCOPE CHAIN) ======

