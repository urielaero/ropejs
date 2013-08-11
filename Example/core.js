var views = require('./views'),
    urls  = require('./urls').urls,
    settings = require('./settings').settings;

//core
(function(){
    'use strict';
    var self = this,
    urlsR = (function(urls){
        var length = urls.length;
        for(var i=0;i<length;i++){
            urls[i][0] = new RegExp(urls[i][0]);
        }
        return urls;
    })(urls);
    self.urlsR = function(urls){
        for(var i in urls){
            urls[i][0] = new RegExp(urls[i][0]);
        }
        return urls;
    };//for test!
    self.controller = function(url,urls,views){
        var urlsR = urlsR || self.urlsR(urls),//for test UrlsR function autoejecutable
            length = urls.length,
            urlParams;
        for(var i=0;i<length;i++){
            if(urlParams = url.match(urlsR[i][0])){
                if(views[urls[i][1]]){
                    views.params = urlParams[1]?urlParams.slice(1):false;
                    return urls[i][1]
                }
            }
        }
        return false;
    };
    
    self.onRequest = function(request,response){
        //for test
        urls = self.urls || urls,
        views = self.views || views;

        if(settings.bugMode){
            console.log('request to: '+ request.url);
        }
        var url = request.url,
            controller = self.controller(url,urls,views);
        if(settings.bugMode){
            console.log('request to: '+ request.url +' controller: '
            +controller);
        }
        if( typeof views[controller]  === 'function'){
            return views[controller](request,response);
        }
        //return false;
        //response.writeHead(200, {'Content-Type':'text/html'});
        //response.write('algo0');
        //response.end();

    };

    self.getPort = function(){
        return settings.port;
    };
}).apply(exports);
