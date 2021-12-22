var http=require('http')
var server=require("../src/httpserverdemo")
const {response} = require("express");
const assert = require("assert");

describe("Server should listen",function(){
    before(function(){
          server.listen(6060)
    })
    after(function(){
      server.close()
    })

   describe('/',function(){
       it("server should listen on given port",function(done){
           http.get('http://localhost:6060',function(response){
               assert.equal(response.statusCode,200)
               done()
           })
       })

   })
})
