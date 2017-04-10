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
