const bodyParser = require("body-parser");
var express=require('express')
var cors=require("cors");
config=require('./assets/config')
app=express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//GET
app.get('/',function(request,response){
    response.send("Customer API and Running.....")


})

app.listen(config.port,function()
{
    console.log('Server started at....',config.port);
});
