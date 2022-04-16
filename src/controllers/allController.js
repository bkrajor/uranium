const authorModel = require('../models/authorModel')
const bookModel = require('../models/bookModel')


const createNewAuthor = async function (req, res) {
    const savedData = await authorModel.create(req.body)
    res.send({ message: savedData })
}

const createNewBook = async function (req, res) {
    const Saved = await bookModel.create(req.body)
    res.send({ message: Saved })
}

const allBooks = async function (req, res) {
    const authorDetails = await authorModel.find({ author_name: "Chetan Bhagat" })
    const id = authorDetails[0].author_id
    const bookName = await bookModel.find({ author_id: id }).select({ name: 1, _id: 0 })
    res.send({ message: bookName })
}

const updatedBookPrice = async function (req, res) {
    const bookDetails = await bookModel.find({ name: "Two States" })
    const id = bookDetails[0].author_id
    const authorN = await authorModel.find({ author_id: id }).select({ author_name: 1, _id: 0 })
    const bkName = bookDetails[0].name
    const updatedPrice = await bookModel.findOneAndUpdate({ name: bkName }, { price: 100 }, { new: true }).select({ price: 1, _id: 0 })

    res.send({ message: authorN, updatedPrice })
}

const authorsName = async function (req, res) {
    const bookId = await bookModel.find({ price: { $gte: 500, $lte: 1000 } }).select({ author_id: 1, _id: 0 })
    const id = bookId.map(imp => imp.author_id)
    let temp = []
    for (let i = 0; i < id.length; i++) {
        let x = id[i]
        const author = await authorModel.find({ author_id: x }).select({ author_name: 1, _id: 0 })
        temp.push(author)

    }
    const authorName = temp.flat()
    res.send({ message: authorName })
}

module.exports = {
    createNewAuthor: createNewAuthor,
    createNewBook: createNewBook,
    allBooks: allBooks,
    updatedBookPrice: updatedBookPrice,
    authorsName: authorsName
}