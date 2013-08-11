var mu = require('mu2') //template engine: mustache
    , settings = require('./settings').settings
    , util = require('util');

//views
(function(){
    this.index = function(request,response){
        mu.root = settings.staticPath;
        if(settings.bugMode)
            mu.clearCache();
        var stream = mu.compileAndRender('index.html',{hola:"hola mundo"});
        util.pump(stream,response);
    };

    this.other = function(request,response){
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write('other url');
        response.end();
    };

    this.withParams = function(request,response){
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write('withParams: '+ this.params );
        response.end();
        
    };

}).apply(exports);
