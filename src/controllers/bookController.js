const { count } = require("console")
const BookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let book = req.body
    let savedData = await BookModel.create(book)
    res.send({ msg: savedData })
}

const bookList = async function (req, res) {
    let allBooks = await BookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: allBooks })
}

const getBooksInYear = async function (req, res) {
    let bookByYear = await BookModel.find({year: req.body.year}).select({bookName:1,_id:0})
    res.send({ msg: bookByYear })
}

const getParticularBooks = async function (req, res) {
    let particularBooks = await BookModel.find(req.body)
    res.send({ msg: particularBooks })
}

const getXINRBooks = async function (req, res) {
    let inrBooks = await BookModel.find({ 'prices.indianPrice': { $in: ["100INR", "200INR", "500INR"] } }).select({bookName:1,_id:0})
    res.send({ msg: inrBooks })
}

const getRandomBooks = async function (req, res) {
    randomBooks = await BookModel.find({ $or: [{ stockAvailable: true }, { totalPages: { $gt: 500 } }] })
    res.send({msg:randomBooks})
}


module.exports = {
    createBook: createBook,
    bookList: bookList,
    getBooksInYear: getBooksInYear,
    getParticularBooks: getParticularBooks,
    getXINRBooks: getXINRBooks,
    getRandomBooks: getRandomBooks
}
