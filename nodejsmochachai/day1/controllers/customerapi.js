const bodyParser = require("body-parser");
var express=require('express')
var cors=require("cors");
config=require('../assets/config')
customerService=require('../services/customerservice')
app=express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//GET
app.get('/',function(request,response){
    response.send("Customer API and Running.....")
})

app.post('/customers',function(request,response){
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    response.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    response.setHeader('Access-Control-Allow-Credentials', true);
    console.log(request.body);
    customer=request.body;
    customerService.addCustomer(customer)
    //console.log(request);
   response.end("Data Received....")
})

app.listen(config.port,function()
{
    console.log('Server started at....',config.port);
});
