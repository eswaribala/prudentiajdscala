config=require('./assets/config')

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:"+config.mongoport+"/"+config.mongodb;

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    //insert data
    var dbo = db.db("customerdb");
    var myobj = { name: "John Dhere", address: "Pune" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });

});
