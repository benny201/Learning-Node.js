

var buf = new Buffer('hello', 'utf8');

console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[0]);

buf.write('wo');
console.log(buf.toString());
buf.write('abc');
console.log(buf.toString());
