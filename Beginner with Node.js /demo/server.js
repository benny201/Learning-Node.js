const http = require('http');
const url = require('url');

module.exports = function(route, handler) {

  http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;
    console.log("Recevied Response!" + pathname);

    // var recData = '';

    //handle request
    // req.setEncoding("utf8");

    //receving event
    // req.on("data", function(chunck) {
    //   recData += chunck;
    //   console.log("Current chunck" + chunck);
    // } );

    //finished
    // req.on("end", function() {
    //   route(handler, pathname, res, recData);
    // })

    route(handler, pathname, res, req);





    // res.writeHead(200, { "Content-Type": "text/plain" });
    // res.write(content);
    // res.end();

  }).listen(3000);

}
