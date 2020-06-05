# Grid

[Great resource W3](https://www.w3.org/TR/css-align-3/#overview)
[css-tricks](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-self)
[Stackover flow](https://stackoverflow.com/questions/48535585/the-difference-between-justify-self-justify-items-and-justify-content-in-css-gr)

**CSS grid alsp starts from the father like flexbox**

display: grid;
most of the time, you are going to talk to the father
Most of the time, design your grid on the father.

SET
How many rows
How many columns

grid-template-columns: as many columns as you want.
grid-template-columns: 20px 55px 100px 200px;
grid-template-columns: 250px 250px 250px 250px;

column-gap: 10px;
row-gap: 10px;
gap: 10px;
gap:

the box will always litens to the font-size unless
you set the height-size of rows

BUT we can't do it
so the solution is

there's grid-template-rows
ROW SIZE
grid-template-rows: 100px 50px 300px;

grid-gap: main cross;

#grid-template-columns

grid-template-columns: 200px 200px 200px 200px;
grid-template-columns: repeat(4, 200px)

grid-template-rows: 200px 200px 200px 200px;
grid-template-rows: repeat(4, 200px);

# VERY COOL

Visually design your layout

grid-template-areas:
"header header header header"
"content content . nav"
"content content . nav"
"footer footer footer footer"

grid-template-areas doesn't know what header, content, nav and footer are

You need to name the contents inside the CSS but CLASS NAME has nothing to do with naming grid-area.

but the grid-area needs to match with the grid-template-areas

grid-template-columns: auto 200px;
auto takes the whole space of the screen.

```
ex)
.box1{
    grid-area: header;
}

.box2{
    grid-area: content;
}
.box3{
    grid-area: nav;
}
.box4{
    grid-area: footer;
}

```

# sexy function Grid has "repeat"

What we want is to stop repeating stuff

# don't need areas

column, row의 숫자를 사용한다.

where do you want the header to start?
where do you want the header to end?

Any grid child.
You need WHERE to start and to end

.header{
grid-column-start: 1;
grid-column-end: 2;
}

the width of column and the height of the row

it's not about the column
it's about the line.

```js
.grid {
//   grid-template-columns: auto 200px;
//   grid-template-rows: 100px repeat(2, 200px) 100px;
//   grid-template-areas:
//     "header header header header"
//     "content content content nav"
//     "content content content nav"
//     "footer footer footer footer";
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(4, 100px);
}

.header {
//   grid-area: header;
  background-color: #2ecc71;
  grid-column-start: 1;
  grid-column-end: 5;
        // grid-column: 1 / 5

}
.content {
//   grid-area: content;
  background-color: #3498db;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
      // grid-column: 1 / 4
    // grid-row: 2 / 4
 //
// grid-row: span 2;


}
.nav {
//   grid-area: nav;
  background-color: #8e44ad;
  grid-row-start: 2;
  grid-row-end: 4;
  // grid-row: 2 / 4
  // grid-row: span 2;

}
.footer {
//   grid-area: footer;
  background-color: #f39c12;
  grid-column-start: 1;
  grid-column-end: 5;
  // grid-column: 1 / 5
  // grid-column: start / end
}
```

```
begin: 1 go to the end: -1
grid-column: 1 / -1

 1  2  3  4
-4 -3 -2 -1

==================

grid-column: span;

span basically replaces the start and the end point
span 4;
```

# shortcuts

grid-column: 1 / -2
start / end
start / -1 (go to the end)

span works horizontally and vertically
span means take up "N" amount of space

# Line naming

grid-column: 1 / -2

# Grid-template && fr => fraction

```
fraction => space available from grid container

we do % or fr for phone design

You need to set your grid HEIGHT

1fr is 0 because height doesn't exist

grid-template is the mother of all short cuts
```

**grid-area**

```
Don't forget to name your elements
so that the grid-template can be applied
ex) grid-area: header

grid-template-columns: repeat(4, 100px);
grid-template-rows: repeat(4, 100px);
```

**repeat doesn't work in grid-template**

# naming => use it everywhere or just don't use it

```
grid-template:
[header-start]"header header header header"  1fr[header-end]
[content-start]"content content content nav" 2fr  [content-end]
[footer-start]"footer footer footer footer"1fr / 1fr 1fr 1fr 1fr; [footer-end]

at the end, you add height

"create the name of the row" how tall is the row / what's the width of each column
ROW / COLUMN

```

```
divs have contents
justify-items
align-items

goes to father

justify-items: default: stretch

stretch means the father will take all the children and stretch them to fill each cell

justify-items: start
the items will not stretch and go to the start of each cell like justify-content: flex-start

so justfiy-items works like justify-content(start, center, end) inside each cell.

align-items is working vertically

REMBMER, by default, the items will be stretch
```

**If you don't have any contents inside the children, you don't see anything because there's no height and width**

```
By default, font-size will take the space but if there's no fonts, it wont' show up anything because the box doesn't have height and width because there's no font!!

BUT when you set default size of width and height, it won't stretch because it has specific measurements (by DEFAULT)
```

## EVERYTHING is stretched vertically and horizontally BY DEFAULT

## shortcuts => place-items => Y(vertical) X(horizontal)

```
place-items: vertical (y) horizontal (x)

```

# item means each one of the cells

## justfiy-content(start, center, end) will move the whole grid within the container

## remember to give the grid container the size of HEIGHT

**justify-content: start // default**

### place-content is just like place-items horizontal vertial

```
place-items is what happens in each one of the squares // inside the squares
place-content is all the squares together // like flexbox
```

### stretch

### align-self: end;

```
align-items, justify-items => applies to all the content

align-self - justify-self
justify-self: center; => removing the stretch

place-self: align-self(vertical) justify-self(horizon)
```

### Very important

##### grid-auto-rows grid-auto-columns

if there's 10000 datas and you can't just have specific rows or columns
because there are too many to count!!!

grid-auto-rows
grid-auto-columns

If there's more content but we didn't specify the rows.
We need to set the leftover rows

```
ex)
data: 100000000

grid-template-rows: repeat(4, 100px)
grid-template-columns: repeat(4, 100px)
grid-auto-rows: 400px; // setting for the leftover rows or don't even want repeat
```

### grid-auto-flow

```
"grid-auto-flow: column" will have leftovers as columns instead of making rows
BUT the thing is original content will be column as well.

so it's either rows or columns like flex-direciton(flexbox)

You can make a beautiful calendar because grid-auto-flow or grid-auto-rows or grid-auto-columns
```

# minmax

**When you specify the minmax numbers, it can not go smaller than the minmax size.**

as big as possible
you don't want it to be small

minmax(100px, 1fr)

100px minimum and then it will stop shrinking
the maximum size will be 1fr

# auto-fit && auto-fill (only for repeat function) responsive design

### auto-fill

repeat(auto-fill, minmax(100px, 1fr));

**fill the empty spaces in the row**

instead of giving numbers.
specify auto-fill as many columns as possible.
so you will have many empty columns.

fills the row with as many columns as possible even if the columns are empty

### auto-fit

**stretch to fit the row as much as possible&**

repeat(auto-fit, minmax(100px, 1fr));
What it does is, it fits the current elements so that they can fit the row

it sort of works like 1fr.
ex) if you add many boxes for auto-fit, it will stretch across the row to fit it

### min-content && max-content (very useful) it only cares about the content inside the container

The content size changes depending on the content(min or max) of the box.

**sizes like fr**

```
when you make a box,

min - tiny box
max- max box

grid-template-columns: max-content 100px;

how small the content can be
how big the content can be

We are designing what we have inside the divs
we are designging what the content should look like

you can combine the minmax and repeat and max-content

combination of 1fr max-content

min-content is telling you to make it as small as possible based on the content
max-content is telling you to make it as big as possible based on the content

but you can also use it 1fr

the box size will be 1fr
```

**grid-template-columns: repeat(auto-fit, minmax(20px, max-content))**
**grid-template-columns: repeat(auto-fill, minmax(20px, max-content))**
