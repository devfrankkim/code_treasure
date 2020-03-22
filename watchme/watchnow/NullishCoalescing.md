
## Nullish Coalescing 

```
const person ={
    name: 'Jack',
    height: null,
    money: 0,
    hasGf: false
}

#1. 
console.log(person.name || 'Doesn't even have a name..');

if person.name is falsy value =>  'Doesn't even have a name..'


#2. 
console.log(person.height || 'Didn't tell us his height');

if person.height is falsy value => 'Didn't tell us his height'

#3. 
console.log(person.money || 'who knows how much money he has');

if the value is 0 => 'who knows how much money he has'
number 0 is falsy value. No computing. 

#4. 
console.log(person.money==='undefined' ||  person.money===null  || 'who knows how much money he has');

console.log(person.money ?? 'who knows how much money he has');

if person.money is null or undefined => 'who knows how much money he has'
Otherwise, it will give you the pure value.


#5.
console.log(person.car || 'who knows what car he has')
=>  'who knows what car he has'

#6.
console.log(person.hasGf || 'who knows about his relationship')'
=> 'who knows about his relationship' 

console.log(person.hasGf ?? 'who knows about his relationship')'
=> false

```