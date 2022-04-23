const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const objectSchema = new mongoose.Schema({
    userId: {
        type: ObjectId, 
        ref: "User"
    },
    productId: {
        type: ObjectId, 
        ref:"Product"
    },
    amount: {
        type: Number
    },
    isFreeAppUser: Boolean, 
    date: String
},{ timestamps: true});

module.exports= mongoose.model('Order', objectSchema)