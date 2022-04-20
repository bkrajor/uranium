const orderModel = require('../models/orderModel');
const userModel = require('../models/userModel');
const productModel = require('../models/productModel');

const createOrder = async (request, response) => {
    const data = request.body;
    const isFreeAppUser = request.headers.isfreeappuser;

    
}

module.exports.createOrder = createOrder; 