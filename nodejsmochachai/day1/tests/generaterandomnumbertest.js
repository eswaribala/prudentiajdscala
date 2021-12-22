const assert=require('assert')
const {generateNumber} = require("../src/generaterandom");

describe('Test the Random NUmber Generator',function(){
    it('Test Generated Number above 10000',function (){
        assert.ok(generateNumber()>1000)
    })
})
