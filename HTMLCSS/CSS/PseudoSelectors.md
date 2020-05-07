# Pseudo Selectors

[Refernece for nth-test](http://www.topdesignagencies.com/nth-test/)

### n + 1 (work + start)

Sometimes people don't work with class names  
It can a problem when you work with team.

pseudo selector means a selector that's not an element.

without classe or id, attribute can still give styles by selecting attributes
ex) input[required="required"]

### nth-child(n)

height를 주지 않으면 마지막 element만 나온다.

this is the concept you need to understand.
태그 이름이나, class, id를 쓰지 않고 선택하는 방법이 있다.
That's pseudo-selector
There are many ways of selecting an element other than tag name ex) input, h1,

```
no last child
last-child is not working with nth-child()
수식을 만들 수도 있다.
property:nth-child(1n) // 2n, 3n, 4n, 5n but not last child
```

```
no last child
// starting from the first one.
n + 1 // from the first one. and n
n + 2 // from the second one. and n
2n + 1 // from the first one and 2n
2n + 2 // from the second one and 2n

.box:nth-child(3) {
background-color: red;
}
```

```
"+" brothers
">" direct child
```
