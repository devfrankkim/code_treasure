/*
    write a function to determine the largest difference
    between any two numbers in an array of numbers
*/

let numbers = [12, 2, 6, 5, 5, 6, 9, 10, 10, 33];

let difference = (function (arr){
    // (1) remove duplicates with Set
    // pass set back to an array
    let answer = Array.from(new Set(arr));
    // (2) Sort the array
    let sorted = answer.sort((a,b)=> b - a)
    // (2) largest - smallest = the largest difference 
    return sorted[0] - sorted[sorted.length - 1]
})(numbers);

console.log(difference);


let usingReduce = (function (arr) {
    let highest = arr.reduce( (a,b) => a > b ? a : b  )
    let lowest = arr.reduce( (a,b) => a < b ? a : b  )
    return highest - lowest
})(numbers)

console.log(usingReduce);