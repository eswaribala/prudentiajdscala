var mocha=require('mocha')
const {getUsers} = require("../../src/asyncawait");
assert=require('assert')
describe('Url should return 200 response',function(){
    it('Invoke getUsers method using axios',async function(){
         const response=  await getUsers('https://jsonplaceholder.typicode.com/users')
    })
})

