mongoose=require('mongoose')

schema=mongoose.Schema
customerSchema=new mongoose.Schema({
    customerId: Number,
    name: String,
    dob: String
})

addressSchema=new mongoose.Schema({
    doorNo: String,
    streetName: String,
    city: String,
    customerRef: [{ type: mongoose.Schema.Types.ObjectId, ref:'CustomerModel' }]
})

module.exports.CustomerModel=mongoose.model('CustomerModel',customerSchema)
module.exports.Addressmodel=mongoose.model('AddressModel',addressSchema)
