# what is display:flex ? I don't talk to the children any more.

[flexbox reference](http://flexboxfroggy.com/#ko)
[fix the height for html,body](https://www.kirupa.com/html5/make_body_take_up_full_browser_height.htm)

it's like saying

Hey, fahter!!!! your children will go there.

Before Flex,
Hey children you go there.

### You only need to talk to the father for flex

### When you use flex, you don't even need to put inline-block any more too!!

### if flex, it's not blocks any more

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
