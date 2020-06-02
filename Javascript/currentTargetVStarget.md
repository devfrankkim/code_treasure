# E.CURRENTTARGET VS. E.TARGET

[reference](http://www.qc4blog.com/?p=650)

```
As you may know, when you click on an element, ‘click’ event bubbles up to <body> node of your element.

Let’s have a look at this code:
<body><p><a href="#">some <span>text</span></a></p></body>

If someone click on ‘text’, a click event will be created and bubble up from <span> node up to <body> node (going throug <span>, <a>, <p> and <body> respectively – provided we did not stop event bubbling with our js code).
```

#### You can attach an event on any of these nodes (<body>, <p>, <a>, <span>) and your event-listener will fire up as click event bubbles up to the top node. Here is the difference between event.currentTarget and event.target.

1. event.target is the node from which the event originated, ie. wherever you place your event listener (on <p> or <span>), event.target refers to <span> node (where user clicked).

2. event.currentTarget, on the opposite, refers to the node on which current-event listener was attached. Ie. if we attached our event listener on <p> node, then event.currentTarget refers to <p> while event.target still refers to <span>.
   Note: that if we also have an event listener on <body>, then for this event-listener, event.currentTarget refers to <body> (ie. event provided as input to event-listerners is updated each time event is bubbling one node up).

### target is the element that triggered the event (e.g., the user clicked on)

### currentTarget is the element that the event listener is attached to.

```
In summary, stopPropagation() works similar to preventDefault () like prevents default behaviour but it’s because of bubbling effects(Until Document) while preventDefault is just preventing the element behaviour itself.
```
