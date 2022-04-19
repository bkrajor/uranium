const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const publisherController = require('../controllers/publisherController')
const bookController= require("../controllers/bookController");


router.post("/createAuthor", authorController.createAuthor  )

router.post('/createPublisher', publisherController.createPublisher)

router.post("/createBook", bookController.createBook  )

router.get('/get-all-books', bookController.fetchbooks)

router.put('/books', bookController.updateBooks)

router.put('/updatedPrice', bookController.updatedPrice)

module.exports = router;