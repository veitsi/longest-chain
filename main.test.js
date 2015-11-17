fs=require('fs');
assert=require('assert');

eval(fs.readFileSync('/home/jsdev/longest-chain/main.js')+'');

suite('basic check for chainLength', function(){
    test('should return 0 for empty string', function(){
        assert.equal(chainLength(""),0);
    });
    test('should return 0 for 0 string', function(){
        assert.equal(chainLength("0"),0);
    });
    test('should return 1 for string with only 1', function(){
        assert.equal(chainLength("1"),1);
    })

});