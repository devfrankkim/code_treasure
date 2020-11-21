//Why do we get this weird result from the map method?
// myarray.map(func);
//We want to convert 3 strings into numbers

let result = ['1', '7', '11'].map(parseInt);
 //returns [1, NaN, 3]

console.log(result);

// 1) '1', 0 - default base 10 -> returns 1
// 2) '7', 1 - 1 is ok as the radix 7 is illegal -> NaN
// 3) '11', 2 - binary as the radix 00000011.. in decimal is 3

// parseInt(num, radix); // default radix 10
// map((value, index, array) => )
// index is being passed in as the radix 

['1', '7', '11'].map(n => parseInt(n));



