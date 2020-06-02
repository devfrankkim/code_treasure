# stopPropagation() VS preventDefault()

### bubbling effects is the key point.

### propagation prevents the bubbling behaviour and the default prevents the default behaviour of the element itself

```
1. Stop Propagation is used to stop propagation to other nodes. For example: if you have a form and then a button inside the form, when you click the btn, because of event bubbling, the form will receive the click and then the form parent until we reach the document itself. Adding stop propagation will stop that behaviour


2. Prevent Default is going to prevent the default behaviour of the element itself, so not necessarily refreshing…For Ex. in a submit btn, every time you click, it will submit, however, if you add preventDefault() it will not submit right away, so you can do something before submitting.


we had a big div with mini btns inside and then we only added a eventListener on the div. From that, we were able to get the specific btn we clicked on and didn’t had to put the eventListener on each btn.


So, when we added the stop propagation to the btn, we weren’t able to find out which btn was clicked
```
