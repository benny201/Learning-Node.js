# Asyn code/libnv/event loop/streams/files

## Node basis
### Asyn
more than one precess running simultaneously

### Synchronous
one process executing at a time

### Node is Asynchronous
### CallBack
a function passed to some other function, which we assume will be `invoked` at some point.

### libuv
* event handle liabrary in C/C++.
* The `event` here is coming from the operating system closer to the machine.
* lower level event: download
* Event loop : check the queue, `libuv` will callback to the V8 when the event is completed.

### non-blocking
doing other things without stopping your programming from running.

### Buffer
a `temporary` holding spot for data being moved from one place to another.

### stream
* A sequence of data made available over time.
* Pieces of data the eventually combine into a whole but you don't need to wait for the whole in one time, just like a movie stream,
you watching it as it comes.
* buffer data

### binary data
* base 2
* base 10: decimal

### character set
* unicode
* ASCII

## Buffers
* not need to require the module because it's a fundamental feature.
```javascript
var buf = new Buffer('hello', 'utf8');
```
* will store binary data
```javascript
the result of the above code: <Buffer 68 65 6c 6c 6f>
```

## files and fs
process:
* require the `fs` module : `var fs = require('fs');`
* read the file : `var greet = fs.readFileSync(__dirname + "/greet.txt", 'utf8');`
* `readFileSync`: read the file wait to util string back, a Synchronous way.
* the file will be first buffered in the buffer and then convert to the `utf8` characters.

### error-first callback:
Callbacks take an error object as their first parameter.
* null if no error
* `readFile()`: Asyn way to read file, use this way in most situation.
```javascript
var greet2 = fs.readFile(__dirname + "/greet.txt", function (err, data) {
  console.log(data);
});
```
## Stream
### chunk
A piece of data being sent through a stream. Data is split in chunks and streamed .
### base(Abstract) calss
A type of constructor you never work directly with, but inherit from.

### wirte / read
```javascript
var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');
```

## Pipes
* Connecting two streams by writing to one stream what is being read from another.
* pope a readable stream to a writeable stream.
* connect streams!!!
* `pipe is available for readable stream!`
* if done will return the destination.
* how pipe work(`the prototype of stream is event-emitter`):
```javascript
readable.on('data', function(chunk) {
	console.log(chunk);
	writable.write(chunk);
});
```
* usage:
```javascript
readable.pipe(writable);
```

### zlib
To compress data!
```javascript
var zlib = require('zlib');
var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');
var gzip = zlib.createGzip();
readable.pipe(gzip).pipe(compressed);
```
