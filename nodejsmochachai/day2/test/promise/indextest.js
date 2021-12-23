var mocha=require('mocha')
var getUsers = require("../../src/asyncawait/index").getUsers
assert=require('assert')
describe('Url should return 200 response',function(){
    it('Invoke getUsers method using axios',function(){
//promise
     return getUsers('https://jsonplaceholder.typicode.com/users').then(res=>{
         assert.ok(res.data.length==10)
     })
    })
})
