# Express

## init a server
```javascript
var express = require('express');
var app = express();
app.listen(3000);
```

## environment


## HTTP METHOD
specifies the type of action the request wishes to make:

GET, POST, DELETE and others. Also called verbs.

### method in express
express have build that method:
```javascript
app.get('/', function(req, res) {
  res.send('<html>hello world</html>');
});

app.get('/api', function(req, res) {
  res.json({firstname: "Zhibin", lastname: "WU"});
});
```


## Routing
### passing variable to the route
: -> colon
```javascript
app.get('/person/:id', function(req, res) {
	res.send('<html><head></head><body><h1>'+ req.params.id + '</h1></body></html>');
});
```
more pattern matching in www.expressjs.com


## static files and middleware

### middleware
code that sits between two layers of software.
In the case of express, sitting between the request and the response.
middleware can

## template for html
* ejs
* jade

## query string
* need some middleware

## rest
an architecture style for building APIs.
