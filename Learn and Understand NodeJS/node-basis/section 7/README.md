# HTTP sever

## Content type in HTTP
MIME(Multipurpose Internet Mail extensions) type: A standard for specifying the type of data being sent.
e.g. application/json, text/html, image/jpeg

## Http-parser
c program embed in node.

## http server

### emit in http
```javascript
like this:
self.emit('request', req, res);
```

### steps
```javascript
var http = require('http');
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type' : 'text/plain' });
  res.end('hello world\n');

          //port, address
}).listen(1337, '127.0.0.1');
```
server will listen to the port.

### html
* create a html file
* use `fs` to read the html
* set the Content-Type
* send the response
```javascript
var html = fs.readFileSync(__dirname + '/index.html');
res.end(html);
```

### html template
* template
```javascript
<html>
  <head></head>
  <body>
    <h1>hello world!!!!!!</h1>
    <h2>{Message}</h2>
  </body>
</html>
```
* code in server
```javascript
html = html.replace('{Message}', message);
```

## stream and perfermance
* create a readable stream
* pipe content to the response!!!

## routing
mapping http requests to content.
```javascript
if (req.url === '/') {
  fs.createReadStream(__dirname + '/index.html').pipe(res);
}

if (req.url === '/api') {
  res.writeHead(200, {'Content-Type': 'application/json'});
  var obj = {
    firstname: 'John',
    lastname: 'Doe'
  };
  res.end(JSON.stringify(obj));
}
```
