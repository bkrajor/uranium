const express = require('express');
const router = express.Router();
const middleWare= require("../middlewares/commonMiddlewares")
const userController= require("../controllers/userController")
const productController= require("../controllers/productController")
const orderController= require("../controllers/orderController")


router.post("/createUser",middleWare.mid, userController.createUser )

router.post("/createProduct", productController.createProduct )

// router.post("/createOrder",middleWare.mid, orderController.createOrder )


module.exports = router;
