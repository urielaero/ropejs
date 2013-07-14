var assert = require('assert');
    core = require('../core'); 
describe('test -> core:',function(){
    describe('Controller url',function(){
        var urls,views,url;
        beforeEach(function(){
            urls = {};
            urls.urls = [
                ['^/$','index'],
                ['^/notFun$'],
                ['^/notView$','notExist']
            ];
            views = {};
            views.index = function(){};
            url = '/';
        });

        


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
                [new RegExp('^/notView$'),'notExist']
            ];
            assert.deepEqual(comp,core.urlsR(urls.urls));//using with array
        });

    });
});
