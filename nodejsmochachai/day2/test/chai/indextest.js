var mocha=require('mocha')
var assert=require('chai').assert
var getUsers = require("../../src/asyncawait/index").getUsers
var CustomUsers=require("../../src/asyncawait/index").CustomUsers

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

    it('response array should include  given Object name',function(){
//promise
        return getUsers('https://jsonplaceholder.typicode.com/users').then(res=> {
                assert.include(res.data,res.data[5],'Given User Exists')
            }
        )
    })

    it('response array should deep include  given Object key,value',function(){
//promise
        this.timeout(5000)
         data=CustomUsers()
         testData={name:{
            firstName:"Parameswari",
                lastName:"Bala"
        }}
        assert.deepInclude({user1: data[0], user2: data[1]}, {user1: testData});
    })


    it('response array should check nested deep include  given Object key,value',function(){
//promise
        this.timeout(5000)

        return getUsers('https://jsonplaceholder.typicode.com/users').then(res=> {

            assert.nestedInclude(res.data[0].company, {'name':"Romaguera-Crona"});
            assert.nestedInclude(res.data[0].address.geo, {'lat':"-37.3159"});
            }
        )
    })


    it('response array should return property name',function(){
//promise
        this.timeout(5000)
        return getUsers('https://jsonplaceholder.typicode.com/users').then(res=> {
            assert.property(res.data[0], 'name');
            assert.property(res.data[0].address, 'geo');
            }
        )

    })

    it('response array should return property value',function(){
//promise
        this.timeout(5000)
        return getUsers('https://jsonplaceholder.typicode.com/users').then(res=> {
                assert.propertyVal(res.data[0], 'name', 'Leanne Graham');
                assert.propertyVal(res.data[0].company,
                    'name', "Romaguera-Crona")
                assert.deepPropertyVal(res.data[0], 'company', {"name": "Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net",
                    "bs": "harness real-time e-markets"});

            }
        )

    })
})

