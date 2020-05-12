# Margin and Padding Deep Dive: The basics

[reference](https://www.youtube.com/watch?v=EhbZGV2dqZ4)

```
Margin is the fundamental way of creating empty space around something.
Padding is pretty much the same but the only difference is it's inside my box, not out side the box.
adding space inside the box.
```
### Very important to remember
```
=> padding adds to the total size of my box so my box size has gotten bigger.
We can change this bevaior by changing the box sizing property
They add to the total size of things
Add to the total size of things.

=> If they don't have background color on them, you won't notice a difference
because the big thing that makes the big difference between the two is the background color.
Padding includes background color, Margin doesn't.
ex)if there's no background color for Margin, the two will look the same. 1)margin:100px, 2)padding:100px 3)No background color.
```
### One thing that's really fundamental with margins and padding also is being able to center something horizontally on the screen
```
To be able to center something on the screen you might have already found it or used it
but it's important to understand.
What's happening is using auto margins.
margin auto shoots across the screen

ex) margin-left: auto
make the margin on the left side as big as possible and make it fill up the space which means it doesn't matter what the space is.
the size can change and it's automatically calculating the space margin.
it's figuring it out on its own to know how big it should be so that the margin is just automatically calculated to fill up the entire space.

ex) margin-left: auto; margin-right:auto;
This is going to center it BANG in the middle because it's automatically calcualting to fill up as much space as possible
and that means they are going to be the same size all the time! so it's going to be perfectly centered on the screen.
This is really a fundamental concept of how to Center something.

ex) margin-top: auto; margin-bottom:auto;
This doesn't happen. Why not? It's just CSS thing. No explanation. it's just CSS spec.
If margin top or bottom are set to auto, it will just be calculated as zero
That's why you usually see ig. margin: 0 auto
```
### Summary 

```
So padding is creating space inside of a content, while margin is creating space outside of the content. You can also change a specific area for both. Such as -left, -right, -top, -bottom, or you can all do it in one property. Lastly, using auto will take the most biggest space as much as possible. You can also use auto to center objects. However, auto will be calculated as 0 when using it for -top and -bottom.
```