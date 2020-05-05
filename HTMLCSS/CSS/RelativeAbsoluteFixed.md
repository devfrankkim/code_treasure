# Fixed, Relative, Absolute

static is just default

absolute and fixed are similar  
the difference is you don't need to scroll for 'fixed'

if you use absolute, it doesn't need father any more.

absoulte goes to html and looks for relative father.  
when it doesn't find the relative father,  
it goes to the position where we tell him to do.

## the father doesn't have relative

It means that if the father doesn't have position: relative, it will listen to body. it won't stick to the father's position anymore.

If there's position:relative for father, it takes the property from the father.

If the child doesn't have a father that is "position:relative", the child will align himself to the body.

If the child has father "relative", the child will align himself to the "relative" father.

## You need to choose how you want to position the children! Body ? or Father(relative)?
