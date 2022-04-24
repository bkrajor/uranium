const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
const authorise = require('../middleWare/auth');
const middleWare = require('../middleWare/auth');


router.post("/users", userController.createUser);

router.post("/login", userController.loginUser);

router.get("/users/:userId", middleWare.authenticate, middleWare.authorise, userController.getUserData);

router.put("/users/:userId", middleWare.authenticate, middleWare.authorise, userController.updatedUser);

router.delete('/users/:userId', middleWare.authenticate, middleWare.authorise, userController.deletedUser);

router.post('/users/:userId', middleWare.authenticate, middleWare.authorise, userController.postMessage);


module.exports = router; 