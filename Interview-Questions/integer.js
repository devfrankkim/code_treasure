/**
 * Write a function to determine if a number is an integer
 */

// Number.isInteger(num)

let isInt = function (num) {
    if(Number.isInteger(num)){
        return true
    } else {
        return false
    }
}

let isNotAnumber = function(num){
    return (!isNaN(num) && parseInt(num) === num);
}

console.log(3, isInt(3));
console.log(3.5, isInt(3.5));
console.log(1.00000, isInt(1.00000));