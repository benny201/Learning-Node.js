var Emitter = require('events');
var config = require('./config').events;


var emtr = new Emitter;

emtr.on(config.GREET, function () {
  console.log('someone said hello');
});

emtr.on(config.GREET, function () {
  console.log('hello again');
});


console.log('hello world');
emtr.emit(config.GREET);
