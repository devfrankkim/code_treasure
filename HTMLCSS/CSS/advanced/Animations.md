# what is Animations?

### @Keyframes tells the CSS you are creating an Animation.

### animation: 10.5s "keyframeName" infinite ease-in-out;

1. define the name of the animation.

it needs two steps => "from" and "to" || % %

```
.box{
    width: 500px;
    height: 500px;
    background-color: red;
    animation: 1.5s shit infinite ease-in-out;
   }

    @keyframes shit {
        0% {
          transform: none;
        }
        50% {
          transform: rotate(1turn) scale(0.5, 0.5);
          background-color: white;
        }
        100% {
          transform: none;
          background-color: hotpink;
        }
      }
```
