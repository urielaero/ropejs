var http  = require('http'),
    core = require('./core');

http.createServer(core.onRequest).listen( (core.getPort() || 8888) ,function(){
    console.log('Server UP! Port: '+ (core.getPort() || 8888));
});
