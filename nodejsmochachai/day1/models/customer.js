mongoose=require('mongoose')

schema=mongoose.schema
customerSchema=new mongoose.Schema({
    customerId: Number,
    name: String,
    dob: String
})

addressSchema=new mongoose.Schema({
    doorNo: String,
    streetName: String,
    city: String,
    customerRef: [{ type: Schema.Types.ObjectId, ref: 'CustomerModel' }]
})

module.exports.CustomerModel=mongoose.model('CustomerModel',customerSchema)
module.exports.Addressmodel=mongoose.model('AddressModel',addressSchema)
