// ======= primitives are copied by their value =======
// ======= independant copies =======
// Number, String, Boolean. Symbol, undefined, null
// Check out different houses

let number = 10;
function increase(number){
    number++; // number here is independant.
    // value is copied into this local funciton
    // after this function, the number is going out of the scope

}

increase(number); // value is copied into the local function
console.log(number);


// ======= Objects are passed by their reference =======
// ======= Point to the same Object =======
// ======= Objects are copied by their reference =======
// Share the same house.

let referenceObj = {value: 10};

function increment(obj){
    obj.value++
}
increment(referenceObj);
console.log(referenceObj); // {value: 11}

