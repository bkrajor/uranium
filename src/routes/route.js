const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController"); 
const middleWare = require('../middleWare/auth'); 


router.post("/users", userController.createUser); 

router.post("/login", userController.loginUser); 

router.get("/users/:userId",middleWare.tokenVerification, userController.getUserData); 

router.put("/users/:userId",middleWare.tokenVerification, userController.updatedUser); 

router.delete('/users/:userId',middleWare.tokenVerification, userController.deletedUser); 


module.exports = router;