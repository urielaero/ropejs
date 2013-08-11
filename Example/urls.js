//urls
(function(){
    //[regExp,function from views
    this.urls = [
            //[regExp,function,],
            ['^/$','index'],
            ['^/other-url-more-charts$','other'],
            ['^/param/(\\w+)$','withParams']

        ];
}).apply(exports);
