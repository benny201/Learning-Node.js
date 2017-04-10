# Event & Event Emitter

## Events
something that has happened in our app that we can response to.
It's not real event.

### listener
this code that responses to the event.

### the whole process of self-make emitter
* set a event listener
```javascript
function Emitter() {
  this.events = {
  };
}
Emitter.prototype.on = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
}
Emitter.prototype.emit = function(type) {
  if (this.events[type]) {
    this.events[type].forEach(function (listener) {
      listener();
    })
  }
}
module.exports = Emitter;

```
* emit a event
```javascript
var Emitter = require('./emmiter')
var emtr = new Emitter;
emtr.on('greet', function () {
  console.log('someone said hello');
});
emtr.on('greet', function () {
  console.log('hello again');
});
console.log('hello world');
emtr.emit('greet');
```

### Emitter in Node
Almost the same as the code shows above!!!
just `require('event')` to get the native module!

### avoid the wrong event
Because the event names are string, the IDE can't tell you the string is wrong.
So create a config module to save the event name is a good way to solve this problem!!!

```javascript
config:

module.exports = {
  events: {
    GREET: 'greet'
  }
}

usage:
emtr.on(config.GREET, function () {
  console.log('hello again');
});

console.log('hello world');
emtr.emit(config.GREET);

```

## Object.create()
A nice way to create prototype chain!
```javascript
var person = {
	firstname: '',
	lastname: '',
	greet: function() {
		return this.firstname + ' ' + this.lastname;
	}
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());
```

### add prototype
```javascript
method.prototype = Object.create(...);
```


### util.inherits()
a core way to inherits, use the inherits() method in util module
```javascript
var Emitter = require('events');
var util = require('util');
function Greetr() {
  this.greeting = 'hello world';
}
util.inherits(Greetr, Emitter);
```

### the "super()" in javascript

```javascript
function Policeman() {
	Person.call(this);
	this.badgenumber = '1234';
}
when you create a new obejct by the constructor, the function will call itself and save the "this.value" to the new object.
```


## ES6

### template literal
a way to concatenate strings in javascript es6.
$: dollar sign
{}: curly braces
``: tatic / grave accent

```javascript
let name = "Benny Wu";
let greet = 'hello' + name;
let greet2 = `hello ${name}`; -> the new way!
```
### class for inheritance
* constructor
* extends
* functions in class are automatically in the prototype chain
