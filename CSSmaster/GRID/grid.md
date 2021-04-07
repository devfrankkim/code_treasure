1. flex

row or column

2. column

container grid items
define by the lines

Each block is A grid cell

in Grid,
we have Tracks (full row or full column)

Area
multiple grid cells

always square or rectangle.
It can't be anything else.

the first thing we should do is
to define columns
grid-template-columns: %, px, \*fr

fr divides equally
repeat()
takes two values

1.  how many times repeating?
2.  size

grid-template-rows
same manner as columns

grid-auto-rows:  
grid-auto-columns:  
pre-define the size of the leftover rows or columns

Positions of the items in the cell(check the developer tool)
justify-content: center
align-items: center
default is stretch which fills the whole cells

grid-row-gap
grid-column-gap

grid-gap: row column ;

grid-column-start
grid-column-end

grid-column : start / end

grid-row: start / end

```js
.item-1{
    grid-row: 2 / 4
    grid-column: 1 / 3
}

 SAME AS

.item-1{
    grid-row: 2 / span 2
    grid-column: 1 / span 2
}

===============
.item-2{
//  grid-row: 1 / 2
//  grid-column: 3 / 4

// row start / column start / row end / column end
    grid-area: 1 / 3 / 2 / 4
}
================

.item-3{
    // justify-self: center;
    // align-self: center;

    //  align-self / justify-self
    place-self: center center
}

```

```js
.grid-container{
    height: 100vh;
    border: 10px solid green;
    display: grid;

    // grid-template-areas:
    // "header header header"
    // "nav main ads"
    // "footer footer footer"

    // grid-template-rows: 60px 1fr 60px;
    // gird-template-columns: 20% 1fr 15%;

 /*      The same as      */
    grid-template:
    "header header header" 60px
    "nav main ads" 1fr
    "footer footer footer" 60px
     20% 1fr 15%;
}

.item-1{
    grid-area: header;
}


.item-2{
    grid-area: nav;
}

.item-3{
    grid-area: main;
}

.item-4{
    grid-area: ads;
}
.item-5{
    grid-area: footer;
}

```
