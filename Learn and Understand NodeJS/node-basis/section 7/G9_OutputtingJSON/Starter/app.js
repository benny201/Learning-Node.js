var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    var obj = {
      firstname: 'Benny',
      lastname: 'Wu'
    }
    // fs.createReadStream(__dirname + '/index.htm').pipe(res);
    res.end(JSON.stringify(obj));


}).listen(1337, '127.0.0.1');
