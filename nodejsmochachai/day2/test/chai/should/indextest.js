var mocha=require('mocha')
var assert=require('chai').assert
expect=require('chai').expect
should=require('chai').should()
var getUsers = require("../../../src/asyncawait/index").getUsers
var CustomUsers=require("../../../src/asyncawait/index").CustomUsers

describe('Url should return 200 response',function(){
    it('Invoke getUsers method using axios',function(){
//promise
        return getUsers('https://jsonplaceholder.typicode.com/users').then(res=> {

                should.equal(res.data.length,10)
            }
            )
        })

    it('Invoke getUsers method using axios boolean',function(){
//promise
        return getUsers('https://jsonplaceholder.typicode.com/users').then(res=> {
           // should.fail(res.data.length, 10, "Array size check", "<=");

                expect(res.data.length==10).to.true
            }
        )
    })

    it('Name should be string',function(){
//promise
        return getUsers('https://jsonplaceholder.typicode.com/users').then(res=> {
            expect('Leanne Graham').to.have.string(res.data[0].name);
            }
        )
    })

    it('response should be an Object',function(){
//promise
        return getUsers('https://jsonplaceholder.typicode.com/users').then(res=> {
            expect(res.data[0]).to.be.an('object');
            }
        )
    })

    it('response array should include  given Object name',function(){
//promise
        return getUsers('https://jsonplaceholder.typicode.com/users').then(res=> {
            expect(res.data).to.include(res.data[5]);

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
        expect(data).to.deep.include(testData);

    })


    it('response array should check nested deep include  given Object key,value',function(){
//promise
        this.timeout(5000)

        return getUsers('https://jsonplaceholder.typicode.com/users').then(res=> {
            expect(res.data[0].company).to.nested.include({'name':"Romaguera-Crona"});
            expect(res.data[0].address.geo).to.nested.include({'lat':"-37.3159"});

            }
        )
    })


    it('response array should return property name',function(){
//promise
        this.timeout(5000)
        return getUsers('https://jsonplaceholder.typicode.com/users').then(res=> {
            expect(res.data[0]).to.have.property('name');
           expect(res.data[0].address).to.have.property('geo');
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

    it("User\'s Email Pattern",async function(){
        //increase the default timeout to 5000ms
        this.timeout(5000)
        const response=  await getUsers('https://jsonplaceholder.typicode.com/users')
        //console.log(response.status);
        expect(response.data[0].email, 'Email Pattern testing').to.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/);

    })
})

