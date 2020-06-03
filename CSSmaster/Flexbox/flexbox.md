# Flexbox rules

[reference](https://cssreference.io/property/align-content/)

display: flex;

1. you don't talk to the children
2. Always talk to the direct father to move the children

### main axis and cross axis

rows - column

flex-direction: row (default) horizental
justfiy-content: center;
position of the flex-children on the horizental axis

the browser will do the math for you.

horizontal axis is called main axis

flex-container
cross axis vertical

## Direct father needs height for for vertical position

## If the children doesn't have height, it gets father's height.

## align-self

align-self behaves exactly like align-itmes but only for one children
only give to one children

## align-times는 cross axis 방향에 있는 item을 바꾼다.

```
ex)

.child:nth-child(2){
    align-self:center;
    }

.child:nth-child(3){
    align-self:flex-end;
    }
```

### Direct father needs height for vertical position

another property you give only to the children is change its order
very weird but useful

You can change the "order" of the box without changing HTML

By default, the box's order is 0
This is useful when you can't change HTML

```
<div class="father">
    <div class="child">2</div>
    <div class="child">1</div>
    <div class="child">3</div>
</div>

.child:nth-child(2){
    order:1;
}
```

# Flex-wrap

flex를 쓰면 width가 바뀐다.

flex squeezes everything into one line.

Therefore, flex will change the width size you set

father and children can both be flex

flex-wrap: nowrap is default
whatever happens, everything in the same line

flex-wrap: wrap => respect the width of children you set

# fiex-direction: row-reverse

HTML doesn't change but you change the direciton of the items on the screen(CSS).

# flex-wrap: wrap-reverse

# line space when using flex-wrap: wrap

To fix the line space of cross axis => _align-content_
It modifies the lines of the corss axis
It is similar to justify-content but line breaks of the cross axis
ex) align-content: space-between

Team: cross axis / Duty: justify-content

#flex-grow, flex-shrink

child에게 줄 수 있는 property

flex-shrink defines
the behaviour of the element when flex starts to squeeze them

# Flexbox doesn't respect the width size you set by default

# flex-shrink is very useful when wanting to squeeze items more than others

but you can define how the boxes can be squeezed.
one can be more squeezed than others.

Default is flex-shrink: 1

flex-shrink : n

ex) flex-shrink:2 => flex-shrink will shrink 2 times more than others

# flex-grow. flex-grow works the same way as shrinks but OPOSSITE

```
Default is flex-grow: 0;

How much can the items grow?
Taking as much space as it can than the others.

flex-grow:1

It's basically sharing available spaces with siblings and taking spaces(main-axis)

flex-grow takes space around the box
takes the space that's left and takes it all

ex) (1) menu (2) content (flex-grow:1) (3) menu

advisable not to use px for width
```

## flex-grow, flex-shrink is very useful for responsive design

## flex-basis

```
flex-basis is just like width
but it is not.
flex-basis는 element에게 처음 크기를 준다?

flex-basis is basically giving width to the element
before shirking or growing

flex-basis is giving the initial size(width) to the element
before everything grows or shrinks
but it's not a guaranteed size.
which is almost the same as width
EXCEPT
flex-basis is not only width
flex-basis is width because flex-basis works on the main-axis

flex-direction: column
flex-basis is used for width or height just depends on main axis(flex-direction)

flex-basis depends on main axis
```

=================
**_flexbox_**

Flexbox doesn't respect the width size you set by default

**flex-grow**

- Defines the behavior of the element how much a box can grow.
- Default : 0
- Taking all the space that's left
- It's basically sharing lefover spaces with siblings(main-axis)

**flex-shrink**

- Defines the behaviour of the element when flex starts to squeeze items
- Default: (flex-shrink: 1)
- value is respect ratio. for example, if it is set with 2, it shrinks twice than the default
- You can define how the boxes can be squeezed.
- flex-shrink is very useful when wanting to squeeze items more than others

```
flex-shrink : n

n times will be squeezed more than others

ex) flex-shrink:2 => flex-shrink will shrink 2 times more than others
```

※ flex-grow & flex-shrink property is good for responsive design.

**flex-basis**

- flex-basis is used for width or height. Just depends on main axis(flex-direction)
- Gives width(default) to the element before shrinking or growing
- Works just like width(default) but it is not.
- flex-basis is width(default) because flex-basis works on the main-axis (row-width or column-height)
- But it's not a guaranteed size.
- Almost the same as width EXCEPT flex-basis is not only width

# Froggy game

flex-flow: flex-direction flex-wrap
