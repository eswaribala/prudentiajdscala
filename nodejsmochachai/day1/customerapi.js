const bodyParser = require("body-parser");
var express=require('express')
var cors=require("cors");
app=express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//GET
app.get('/',function(request,response){
    response.send("Customer API and Running.....")


})

app.listen(4000,function()
{
    console.log('Server started at 4000....');
});
