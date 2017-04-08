var greet = require('./greet1.js');
greet();

var greet2 = require('./greet2.js').greet;
greet2();

var greet3 = require('./greet3.js');
greet3.greet();
greet3.greeting = 'change';
console.log(greet3);

var greet3b = require('./greet3');
greet3b.greet();

var greet4 = require('./greet4');
console.log(greet4);
var grt4 = new greet4();
grt4.greet()


var greet5 = require('./greet5').greet;
greet5();
