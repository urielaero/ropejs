var views = require('./views'),
    urls  = require('./urls');

//core
(function(){
    'use strict';
    var 
    head = {'Content-Type':'text/html'},
    urlsR = (function(urls){
        var length = urls.length;
        for(var i=0;i<length;i++){
            urls[i][0] = new RegExp(urls[i][0]);
        }
        return urls;
    })(urls.urls);
    this.urlsR = function(urls){
        for(var i in urls){
            urls[i][0] = new RegExp(urls[i][0]);
        }
        return urls;
    };//for test!
    this.controller = function(url,urls,views){
        urlsR = this.urlsR(urls);//for test UrlsR function autoejecutable
        var length = urls.length;
        for(var i=0;i<length;i++){
            if(url.match(urlsR[i][0])){
                return views[urls[i][1]]?urls[i][1]:false;
            }
        }
        return false;
    };
    
    this.onRequest = function(request,response){
        console.log('request to: '+ request.url);
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write('algo0');
        response.end();

    };
}).apply(exports);

    
//core.js  index.js  README.md  server.js  test  urls.js  views.js

