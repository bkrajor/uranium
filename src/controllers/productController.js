const productModel = require('../models/productModel')

const createProduct = async function(req, res){
    let product = await productModel.create(req.body)
    res.send({product: product})
}

module.exports.createProduct = createProduct