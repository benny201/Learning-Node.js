var Emitter = require('events');
var util = require('util');


function Greetr() {
  this.greeting = 'hello world';
}

util.inherits(Greetr, Emitter);

Greetr.prototype.greet = function () {
  console.log(this.greeting);
  this.emit('greet');
}


var greet1 = new Greetr();

greet1.on('greet', function () {
  console.log('someone');
});

greet1.greet();
