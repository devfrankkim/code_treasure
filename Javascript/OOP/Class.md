# Class

[Class in Code Academy](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-classes/cheatsheet)


**Class**
```
JavaScript supports the concept of classes as a syntax for creating objects. Classes specify the shared properties and methods that objects produced from the class will have.

When an object is created based on the class, the new object is referred to as an instance of the class. New instances are created using the new keyword.

The code sample shows a class that represents a Song. A new object called mySong is created underneath and the .play() method on the class is called. The result would be the text Song playing! printed in the console.
```
```js
class Song {
  constructor() {
    this.title;
    this.author;
  }
  
  play() {
    console.log('Song playing!');
  }
}

const mySong = new Song();
mySong.play();
```

### Class Constructor

```
Classes can have a constructor method. This is a special method that is called when the object is created (instantiated). Constructor methods are usually used to set initial values for the object.
```
```js
class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }
}

const mySong = new Song('Bohemian Rhapsody', 'Queen');
console.log(mySong.title);
```

### Class Methods

```
Class Methods
Properties in objects are separated using commas. This is not the case when using the class syntax. Methods in classes do not have any separators between them.

```
```js

class Song {
  play() {
    console.log('Playing!');
  }
  
  stop() {
    console.log('Stopping!');
  }
}
```