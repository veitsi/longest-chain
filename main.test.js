fs=require('fs');
assert=require('assert');

eval(fs.readFileSync('/home/jsdev/longest-chain/main.js')+'');

suite('basic check for chainLength', function(){
    test('should return 0 for dirty string', function(){
        //assert.equal(chainLength("ghfghfghfghfdhfdhfdhfgh"),0);
        //to check if error
    });
    test('should return 0 for empty string', function(){
        assert.equal(chainLength(""),0);
    });

    test('should return 0 for 0 string', function(){
        assert.equal(chainLength("0"),0);
    });
    test('should return 0 for "0000000000" string', function(){
        assert.equal(chainLength("0000000000"),0);
    });
    test('should return 1 for string with only 1', function(){
        assert.equal(chainLength("1"),1);
    });
    test('should return 5 for string "11111"', function(){
        assert.equal(chainLength("11111"),5);
    });
    test('should return 3 for string "000111000"', function(){
        assert.equal(chainLength("000111000"),3);
    });
    test('should return 4 for string "11101111000"', function(){
        assert.equal(chainLength("110001111000"),4);
    });

});