const child_process = require('child_process');
const fs = require('fs');
const formidable = require("formidable");
const util = require('util');


exports.start = function (response, request) {

  console.log("start is called!");


  //action ="/upload"
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, { "Content-Type" : "text/html" });
    response.write(body);
    response.end();
  // var content = 'empty';
  // child_process.exec("find /",
  //    { timeout: 10000, maxBuffer: 20000*1024 },
  //    function(err, stdout, stderr) {
  //
  //   response.writeHead(200, { "Content-Type" : "text/plain" });
  //   response.write(stdout);
  //   response.end();
  //
  // })

}

exports.upload = function (response, request) {

  console.log("upload is called!");
  // return "hello upload";
  // response.writeHead(200, { "Content-Type" : "text/plain" });
  // response.write("You sent" + recData);
  // response.end();
  var form = new formidable.IncomingForm();
  console.log("about to parse");
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");
    fs.renameSync(files.upload.path, "/tmp/me.png");
    // var readStream = fs.createReadStream(files.upload.path);
    //    var writeSream = fs.createWriteStream("/tmp/test.png");
    //    util.pump(readStream,writeSream,function(){
    //        fs.unlinkSync(files.upload.path);
    //    });
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("received image:<br/>");
    response.write("<img src='/show' />");
    response.end();
  });

}


exports.show = function(res, request) {
  fs.readFile('./tmp/me.png', "binary", function (err, file) {
    if (err) {
      res.writeHead(200, { "Content-Type" : "text/plain" });
      res.write(err + "");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type" : "image/png" });
      res.write(file, "binary");
      res.end();
    }
  });
}
