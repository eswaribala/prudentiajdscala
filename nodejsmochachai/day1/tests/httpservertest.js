var http=require('http')
var server=require("../src/httpserverdemo")
const {response} = require("express");
const assert = require("assert");

describe("Server should listen",function(){
    before(function(){
          server.listen(8989)
    })
    after(function(){
      server.close()
    })

   it("server should listen on given port",function(done){
       http.get('http://localhost:8989/',function(response){
           assert.Equal(response.statusCode,200)
       })
   })

})
