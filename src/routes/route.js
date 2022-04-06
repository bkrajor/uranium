const express = require('express');
const welcomeModule = require('../logger/logger')
const dateStatusModule=require('../util/helper')
const formatterModule=require('../validator/formatter')
const lodashModule=require('../lodash/lodash')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log("======================================================================")
    welcomeModule.welcome()
    console.log("======================================================================")
    dateStatusModule.printDate()
    console.log("======================================================================")
    dateStatusModule.printMonth()
    console.log("======================================================================")
    dateStatusModule.getBatchInfo() 
    console.log("======================================================================")
    formatterModule.trim()
    console.log("======================================================================")
    formatterModule.changeToLowerCase()
    console.log("======================================================================")
    formatterModule.changeToUpperCase()
    res.send('My first ever api!')
});

router.get('/hello', function (req, res){
    res.send('Hello!')
    console.log("======================================================================")
    lodashModule.chunkFunction()
    console.log("======================================================================")
    lodashModule.tailFunction()
    console.log("======================================================================")
    lodashModule.unionFuntion()
    console.log("======================================================================")
    lodashModule.pairsFunction()
})


module.exports = router
// adding this comment for no reason