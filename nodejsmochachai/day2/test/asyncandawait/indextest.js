var mocha=require('mocha')
var getUsers = require("../../src/asyncawait/index").getUsers
assert=require('assert')
describe('Url should return 200 response',function(){
    it('Invoke getUsers method using axios',async function(){
        //increase the default timeout to 5000ms
        this.timeout(5000)
         const response=  await getUsers('https://jsonplaceholder.typicode.com/users')
        //console.log(response.status);
         assert.ok(response.data.length==10)
    })
})

