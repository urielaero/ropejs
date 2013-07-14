var views = require('./views'),
    urls  = require('./urls');

//core
exports = exports || {};
(function(){
    var 
    head = {'Content-Type':'text/html'};
    this.controller = function(url,urls,views){
        var reg;
        for(var i in urls){
            reg = new RegExp(urls[i][0]);
            if(url.match(reg))
                return urls[i][1];
        }
        return false;
    };
    
    this.onRequest = function(request,response){
        //var url = url.parse(request.url).pathname;
        console.log('request to: '+ request.url);

        response.writeHead(200, {'Content-Type':'text/html'});
        response.write('algo0');
        response.end();

    };
}).apply(exports)

    
//core.js  index.js  README.md  server.js  test  urls.js  views.js

