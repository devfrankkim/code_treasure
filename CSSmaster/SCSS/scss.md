# SCSS

(responsive design size)[https://responsivedesign.is/develop/browser-feature-support/media-queries-for-common-device-breakpoints/]

You are going to write some sexy CSS

preprocessor

we are going to complie the sexy CSS and then it's going to become the normal CSS

# Stylus-lang

# less

1. you need a complier
2. New code => Old code (gulp)

ex) scss => css

### gulp

gulp filed I created is looking for specific file "styles.scss"

Everything you do on .scss file, it's being watched. (entry point)

src/scss/styles.scss에서 하는 일은, CSS로 complie 된다.
it will be inside the folder "dist"

1. package.json
2. .babelrc
3. install node_modules (npm install)

The browser doesn't understand SCSS so the link should point to "styles.css" not "styles.scss"

### How to create variables underscore_fileName

you create a file

\_variables.scss
\_potato.css

what matter is to use underscore. we don't want this to be translated
it's only for SCSS

```
$bg: red;
```

and you have to import the \_variables from styles.scss

### Nesting

more precise what you are targetting

### @mixin Mixins is like function. You pass arguments and Mixins will take the parameters and do the programming

reuse SCSS functionality
it works like functions
@includ FUNCTIONS()

for reuse
mixins can accept variables

```
a {
  &:nth-child(odd) {
    @include link(yellow);
  }
  &:nth-child(even) {
    @include link(green);
  }
}

@mixin link($color) {
  text-decoration: none;
  color: $color;
  font-size: 3rem;
  display: block;
  margin-bottom: 12px;
  &:hover {
    background-color: red;
  }
}

```

```

a {
  &:nth-child(odd) {
    @include link("odd");
  }
  &:nth-child(even) {
    @include link("even");
  }
}



@mixin link($word) {
  text-decoration: none;
  @if $word == "odd" {
    color: blue;
  } @else {
    color: green;
  }
  font-size: 3rem;
  display: block;
  margin-bottom: 12px;
  &:hover {
    background-color: red;
  }
}

```

### %extends

depending on conditions (mixins)

very useful when you have to separate many
page에서 분리해야하는 element들이 많을때 유용하다.

ex) button, title, card, navigation

```
@import "_buttons";

a {
  @extend %button;
  text-decoration: none;
}

button {
  @extend %button;
  border: none;
}

%button {
  font-family: inherit;
  border-radius: 20px;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 5px 10px;
  background-color: red;
  color: white;
  font-weight: 500;
}

```

### @include MIX("argument") - @mixin MIX(\$argument): Functionality

### @extend %Reuse - %Reuse: Reusability

### @content, this is great for mobile responsiveness

```

[styles.scss]
@import "_responsive.scss"
h1 {
    @include responsive("iphone"){
        color: purple;
        font-size: 20px;
    }
}

[_responsive.scss]

$min-device-width: 320px;
$max-device-width: 320px;

@mixin responsive($device){

  @if $device == "iphone"{
@media only screen
  and (min-device-width: $min-device-width:)
  and (max-device-width: $max-device-width)
  and (-webkit-min-device-pixel-ratio: 2) {
      @content
   }
  }
}



```
