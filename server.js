var http  = require('http'),
    core = require('./core');

http.createServer(core.onRequest).listen(8888,function(){
    console.log('Server UP!')
});

