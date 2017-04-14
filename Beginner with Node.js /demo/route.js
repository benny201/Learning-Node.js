

module.exports = function(handler, pathname, response, request) {

  // console.log("the pathname:" + pathname);
  if (typeof handler[pathname] === 'function') {
    return handler[pathname](response, request);
  } else {
    console.log("no such handler!")
    response.writeHead(400, { "Content-Type" : "text/plain" });
    response.write("400 Not Found!");
    response.end();
  }

}
