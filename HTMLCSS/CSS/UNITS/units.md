# UNITS (viewport, %, rem, em, vmin, vmax)

### Viewport = the browser window size. If the viewport is 50cm wide, 1vw = 0.5cm.

### REM sticks to the ROOT and EM sticks to the parents

### Viewport sticks to the screen size. % sticks to the parents

[reference](https://www.w3schools.com/cssref/css_units.asp)
[vmin vs vmax](http://thenewcode.com/1137/MinMaxing-Understanding-vMin-and-vMax-in-CSS)

```
px => absolute width (absolute)

%  => based on parents size (relative)
```

======

```
VW,VH => relative width  (relative)

1vw === 1% of the entire screen size on the width.

vw, vh based on the screen size (SCREEN)

% => based on the parents size (need PARENTS)

summary =>

% always needs parents for sizing

vw, vh doesn't need parents. They only need screen for sizing. That's all (Responsive)
```

=======

```
rem and em are both relative

rem stands for root
relative to the root font size

em is not relative to the root
it's relative to the parents

summary =>

use reset.css and give the root specific font-size for REM
```

=======

```
fonts can also be responsive

vmin is the minimum between the viewport's height or width in percentage depending on which is smaller.

vmax is the maximum between the viewport's height or width in percentage depending on which is bigger.

ex)
font-size: 10vmin;
```
