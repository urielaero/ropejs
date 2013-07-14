var assert = require('assert');
    core = require('../core'); 
describe('test -> core:',function(){
    describe('Coincide width url',function(){
        beforeEach(function(){
            urls = {};
            urls.urls = [
                ['^/$','index'],
                ['^/notFun$']
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

    });
});
