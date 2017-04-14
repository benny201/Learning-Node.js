const server = require('./server');
const route = require('./route');
const requestHandler = require('./requestHandler');

var handler = {};
handler['/'] = requestHandler.start;
handler['/start'] = requestHandler.start;
handler['/upload'] = requestHandler.upload;
handler['/show'] = requestHandler.show;


server(route, handler);
