// Basic Data Structures: Use an Array to Store a Collection of Data
/*
All arrays have a length property,
which as shown above, 
can be very easily accessed with the syntax "Array.length". 
A more complex implementation of an array can be seen below. 
This is known as a multi-dimensional array, 
or an array that contains other arrays.
Notice that this array also contains JavaScript objects, 
which we will examine very closely in our next section, 
but for now, 
all you need to know is that 

**arrays are also capable of storing complex objects.**
*/


let complexArray = [
    [
      {
        one: 1,
        two: 2
      },
      {
        three: 3,
        four: 4
      }
    ],
    [
      {
        a: "a",
        b: "b"
      },
      {
        c: "c",
        d: "d"
      }
    ]
  ];