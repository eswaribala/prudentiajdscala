var mocha=require('mocha')
var assert=require('chai').assert
var getUsers = require("../../src/asyncawait/index").getUsers

describe('Url should return 200 response',function(){
    it('Invoke getUsers method using axios',function(){
//promise
        return getUsers('https://jsonplaceholder.typicode.com/users').then(res=> {

                assert.isOk(res.data.length == 10)
            }
            )
        })

    it('Invoke getUsers method using axios boolean',function(){
//promise
        return getUsers('https://jsonplaceholder.typicode.com/users').then(res=> {
                assert.isBoolean(res.data.length == 10)
            }
        )
    })

    it('Id should not be string',function(){
//promise
        return getUsers('https://jsonplaceholder.typicode.com/users').then(res=> {
                assert.isNotString(res.data[0].id)
            }
        )
    })

    it('response should be an Object',function(){
//promise
        return getUsers('https://jsonplaceholder.typicode.com/users').then(res=> {
                assert.typeOf(res.data[0],'object','User Object Exists')
            }
        )
    })

})

