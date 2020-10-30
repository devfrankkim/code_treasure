var user = {
    name: "John"
  };

var admin = user;
user.name = null

admin // {name: null}
user // {name: null}

      

/*
This is the expected behavior.
Assigned the variable user a new value.
The variable admin is still pointing to the object because it doesn't care about the value of user.
*/
var user = { name: "John" };
var admin = user;
user = null;
admin // {name: "John"}
user // null