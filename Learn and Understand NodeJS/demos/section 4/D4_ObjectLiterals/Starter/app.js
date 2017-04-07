// Your Javascript Code Goes Here


var person = {
  first_name: "Zhibin",
  last_name: "Wu",
  say: function () {
    console.log("I am:" + this.first_name + " " + this.last_name);
  }
}

person.say();
console.log(person["first_name"]);
