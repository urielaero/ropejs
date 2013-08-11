var assert = require('assert');
    core = require('../core'); 
describe('test -> core:',function(){
    var urls,views,url;
    beforeEach(function(){
        urls = {};
        urls.urls = [
            ['^/$','index'],
            ['^/notFun$'],
            ['^/notView$','notExist'],
            ['^/param/(\\w+)$','oneParam'],
            ['^/param2/(\\w+)/(\\w+)','twoParam']
        ];
        views = {};
        views.index = function(){};
        views.oneParam = function(){
            return views.params;
        };
        views.twoParam = function(){
            return views.params;
        };
        url = '/';
    });

    describe('Controller url',function(){


        it('exist url',function(){
            assert.equal('index',core.controller(url,urls.urls,views));
        });

        it('not exist url',function(){
            assert.equal(false,core.controller('/notUrl',urls.urls,views));
        });
        
        it('not exist function',function(){
            assert.equal(false,core.controller('/notFu',urls.urls,views));
        });
        
        it('not definide function in views',function(){
            assert.equal(false,core.controller('/notView',urls.urls,views));
        });

        it('compile RegExp',function(){
            var comp = [
                [new RegExp('^/$'),'index'],
                [new RegExp('^/notFun$')], 
                [new RegExp('^/notView$'),'notExist'],
                [new RegExp('^/param/(\w+)$'),'oneParam'],
                [new RegExp('^/param2/(\w+)/(\w+)'),'twoParam']
                        
            ];
            assert.deepEqual(comp,core.urlsR(urls.urls));//using with array
        });

        it('url params include to RegExp',function(){
            assert.equal('oneParam',core.controller('/param/test',urls.urls,views));
        });

        it('url params NOT include to RegExp',function(){
            assert.equal(false,core.controller('/param/test/test2',urls.urls,views));
        });
    });
    describe('Controller onRequest -> function ',function(){
        var request = {},
            response = {};
            beforeEach(function(){
                core.urls = urls.urls;
                core.views = views;
            });

        it('url 1:params',function(){
            request.url = '/param/test';
            assert.deepEqual(['test'],core.onRequest(request,response)); 
        });

        it('url 2:params',function(){
            request.url = '/param2/test/test2';
            assert.deepEqual(['test','test2'],core.onRequest(request,response)); 
        });
    });
});
