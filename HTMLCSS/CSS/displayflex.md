# What is flexbox? I don't talk to the children any more.

1. [flexbox GAME](http://flexboxfroggy.com/#ko)
2. [fix the height for html,body](https://www.kirupa.com/html5/make_body_take_up_full_browser_height.htm)

it's like saying

Hey, fahter!!!! your children will go there.

Before Flex,  
Hey children you go there.

### You only need to talk to the father for flex

### When you use flex, you don't even need to put inline-block any more too!!

### if flex, it's not blocks any more

justify-content
align-content - Aligns the container of the flex box. (with space organized!!!!)
align-item - Aligns the item inside the container.

- flex-start: Items align to the left side of the container.
- flex-end: Items align to the right side of the container.
- center: Items align at the center of the container.
- space-between: Items display with equal spacing between them.
  first & last itemes will be at the ends of the browser and then the rest of the items will space out evenly between them.
- space-around: Items display with equal spacing around them.(everything space equally)

### align-items

- flex-start: Items align to the top of the container.
- flex-end: Items align to the bottom of the container.
- center: Items align at the vertical center of the container.
- baseline: Items display at the baseline of the container.
- stretch: Items are stretched to fit the container.

### flex-direction

- row: Items are placed the same as the text direction.
- row-reverse: Items are placed opposite to the text direction.
- column: Items are placed top to bottom.
- column-reverse: Items are placed bottom to top.

### align-self

### flex-wrap

- nowrap: Every item is fit to a single line.
- wrap: Items wrap around to additional lines.
- wrap-reverse: Items wrap around to additional lines in reverse.

### flex-flow

- flex-flow:column wrap

- flex-direction: column;
- flex-wrap:wrap

### align-content

- align-content determines the spacing between lines, while align-items determines how the items as a whole are aligned within the container. When there is only one line, align-content has no effect.

```
*justify-content*
space-between,
space-around // not only contents but around the box too
```

```
*flex-direction*
flex-direction // change the direction. row, column  (inline-block shape)
```

```
_Trick_
display: flex

flex-direction(default): row

justify-content : horizontally
align-items : vertically
-------------------------------
flex-direction: columns

justify-content : vertically
align-items : horizontally
```

```
It's saying I will make things fit

when you want to break the line
flex-wrap: wrap

Break the line as soon as it finds the edge
Breaking the flex container and making a new line as soon as it finds the end of the page

By default,
flex is no wrap. so it doesn't drop the boxes.
flex will shrink everything. This isn't good.
so this is trying to wrap all of them. and it doesn't change the size of them.
```

```
*shortcut*
div.box{$}*10

// "father" will move the boxes and the "box" moves the contents ${numbers}
//  because "box" is a flex container now.
// "father" is also a flex container which means the "father" will move the whole box.

<div class="father">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
    <div class="box">6</div>
    <div class="box">7</div>
    <div class="box">8</div>
    <div class="box">9</div>
    <div class="box">10</div>
</div>

    <style>
      html,
      body {
        height: 100%;
      }
      .father {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        height: 100%;
        flex-direction: row;
        flex-wrap: wrap;
      }
      .box {
        background-color: red;
        width: 200px;
        height: 200px;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
      }
    </style>
```

flex-rap: wrap-reverse, nowrap, wrap  
you can try reverse for other flex as well.
