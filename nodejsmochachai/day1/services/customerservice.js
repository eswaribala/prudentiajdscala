var mongoose = require('mongoose');
var CustomerModel = require("../models/customer").CustomerModel
config=require('../assets/config')

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:"+config.mongoport+"/"+config.mongodb;
mongoose.connect(url);
//insert customer data
module.exports.addCustomer=function(customer){
    var db = mongoose.connection;
    db.once('open', function() {
    });

    var obj = new CustomerModel(
        {
            customerId:customer.customerId,
            name:customer.name,
            dob:customer.dob

        });
    obj.save(function(err,result){
        if(!err)
            console.log(result);

    });
}




