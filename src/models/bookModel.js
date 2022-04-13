const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: { type: String, required: true },
    prices: {
        europeanPrice: String,
        indianPrice: String,
    },
    year: { 
        default: 2021, 
        type: Number 
    },
    tags: [String],
    authorName: String,
    totalPages: Number,
    stockAvailable: Boolean
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) 

