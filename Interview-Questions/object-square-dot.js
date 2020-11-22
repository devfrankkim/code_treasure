// Differences between dot notation and square bracket syntax


var sam = {
    castiel: "mary",
    undefined : "FRANK"
}

var dean = {
    john: "crowley",
    mary: "chuck",
    FRANK: "ANDREA"
}

// [variable]  - It takes everything and do that all as one grouping.
// dot notation needs to be direct children.

// *** Go to innermost one to figure out what that is ***

// which, if any, of these three log statements will work?

console.log(dean[sam.castiel]); // "chuck"
// dean["mary"] === dean[sam.castiel]
// sam.castiel property? - yes

console.log(dean[sam['castiel']]); // "chuck"
console.log(dean[sam['define']]); // "chuck"
// 1. Going one up level. 
// 2. Does sam have something called Castiel as a property? - yes

console.log(dean.sam.castiel); // fail
console.log(dean[sam[castiel]]); // dean[sam[not defined]]
