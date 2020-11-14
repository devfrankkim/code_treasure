// https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/
function hello(thing) {
    console.log("Hello " + thing);
  }
  
  // this:
hello("world")
  
  // desugars to:
hello.call(window, "world");


  // this:
hello("world")
// desugars to:
hello.call(undefined, "world");


var person = {
    name: "Brendan Eich",
    hello: function(thing) {
      console.log(this + " says hello " + thing);
    }
  }
  
  // this:
  person.hello("world")
  
  // desugars to this:
  person.hello.call(person, "world");

  function hello(thing) {
    console.log(this + " says hello " + thing);
  }
  
  person = { name: "Brendan Eich" }
  person.hello = hello;
  
  person.hello("world") // still desugars to person.hello.call(person, "world")
  
  hello("world") // "[object DOMWindow]world"


  // Using Function.prototype.bind
  var person = {
    name: "Brendan Eich",
    hello: function(thing) {
      console.log(this.name + " says hello " + thing);
    }
  }
  
  var boundHello = function(thing) { return person.hello.call(person, thing); }
  
  boundHello("world");

  var bind = function(func, thisValue) {
    return function() {
      return func.apply(thisValue, arguments);
    }
  }
  
  var boundHello = bind(person.hello, person);
  boundHello("world") // "Brendan Eich says hello world"


  var boundHello = person.hello.bind(person);
boundHello("world") // "Brendan Eich says hello world"


var person = {
    name: "Alex Russell",
    hello: function() { console.log(this.name + " says hello world"); }
  }
  
  $("#some-div").click(person.hello.bind(person));
  
  // when the div is clicked, "Alex Russell says hello world"