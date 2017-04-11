// Your Javascript Code Goes Here

function person (firstname, lastname) {
  this.firstname  = firstname;
  this.lastname = lastname;
}

person.prototype.greet = function() {
  console.log("hello" + this.firstname);
}

var me  = new person("zhibin", "wu");
me.greet();

console.log(me.__proto__);
console.log(me.prototype);
