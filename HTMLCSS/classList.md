# ClassList is very useful.

JavaScript에서 CSS에 있는 특정 클래스 리스트를 가지고와서 DOM을 update할 수 있다.

ex)

### classList.add("className")

```js
// css에 있는 'hide' class 속성을 사용할 수 있다.  => Go check the 'hide' class property.
TypeTwo.classList.add("hide");
```

```css
// hide 클래스에 display: none을 줬다. 자바스크립트에서 해당 클래스를 사용 하여 display: none을 할 수 있다.
.hide {
  display: none;
}
```

### classList.remove("className");

[JavaScript]

```js
// css에 있는 hide class property를 제거할 수 있다 => display: none을 없애주면, display가 보여질 것이다.
mainScreen.classList.remove("hide");
```

[CSS]

```css
.hide {
  display: none;
}
```

### Get data and then put data some nice dress using classList

[JavaScript]

```js
// data[0][1][2] => "love"
MainScree.classList.add(data[0][1][2]);
```

[CSS]

```css
// data[0][1][2] => "love"
.love {
  background-color: "red";
}
```

### Make sure you don't caplitalize classList because CSS(case) is pretty sensive. Just do it to the data name
