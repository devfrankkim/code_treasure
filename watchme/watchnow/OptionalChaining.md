# Optional Chaining

```
const person1 = {
    name: 'Kim',
    cat: {
        name: 'meow'
    },
    speak(){
        console.log(`Whats up? I'm Kim`)
    }
}

const person2 = {
    name: 'Lee',
    dog: {
        name: 'ruff'
    }, 
    cash: [1, 5, 10]
};

const people = [person1, person2];

for (const person of people){
    console.log(person.dog.name) // Can't read property 'name' of defined
}
// App breaks
person.dog => undefined
undefined.name => breaks code (NO NO)

============

How do we fix this?

for (const person of people){
    console.log(person.dog && person.dog.name)
}

// Verbosed
// No error messages
=> undefined 
=> ruff

for (const person of people){
    console.log(person.dog?.name)
}
if person.dog exists, then give me the name.
it checks the property, AND
if it's truthy value, then give me the next value.



for (const person of people){
    person.speak()
}
=> this breaks!!!!

#1. Solution
for (const person of people){
    person.speak && person.sepak();
}
=> Nothing breaks

#2. Solution
for (const person of people){
    person.speak?.();
}
=> Nothing breaks


for (const person of people){
    person.cash[0]
}
=> Cannot read property '0' of undefined

  
#1. Solution
for (const person of people){
    person.cash && person.cash[0];
}

for (const person of people){
    person.cash?.[0];
}
|| 'no money'



```







