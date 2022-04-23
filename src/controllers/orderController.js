const OrderModel = require("../models/orderModel");
const ProductModel = require("../models/productModel");
const UserModel = require("../models/userModel");

const createOrder = async function (req, res) {
    let data = req.body
    if (!data.hasOwnProperty("userId") && data.hasOwnProperty("productId"))
        return res.send({ error: "userId or productId is missing" })

    let user = await UserModel.findById(data.userId)
    let product = await ProductModel.findById(data.productId)
    if (!user)
        return res.send({ error: "No user exist with this ID" })
    else if (!product)
        return res.send({ error: "No product exist with this ID" }) 
 
    if (user.isFreeAppUser == false) {
        if (user.balance >= product.price) {
            let updatedBalance = await UserModel.findByIdAndUpdate({ _id: data.userId }, { $inc: { balance: -product.price } }, { new: true });
            data.amount = product.price;
            data.isFreeAppUser = false
            let orderDetail = await OrderModel.create(data);
            res.send({ order: orderDetail });
        } else {
            res.send({ error: "insufficient balance" });
        }
    } else {
        data.amount = 0;
        data.isFreeAppUser = true
        let orderDetails = await OrderModel.create(data);
        res.send({ order: orderDetails });
    }
};

module.exports.createOrder = createOrder;