const mongoose = require('mongoose');


const batchModel = new mongoose.Schema( {
    name: String,
    size: Number,
    program:{
        type:String,
        enum:["backend","frontend"]
    }
}, { timestamps: true });


module.exports = mongoose.model('batch', batchModel)
