const express = require('express');
const router = express.Router();
const cowinController= require("../controllers/cowinController")
const weatherController= require("../controllers/weatherController")
const memesController= require("../controllers/memesController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", cowinController.getStates)

router.get("/cowin/districtsInState/:stateId", cowinController.getDistricts)

router.get("/cowin/getByPin", cowinController.getByPin)

router.post("/cowin/getOtp", cowinController.getOtp)

router.get("/cowin/getByDistrict", cowinController.getByDistrict)

router.get("/getWeather", weatherController.getWeather)

router.get("/getTemp", weatherController.getTemp)

router.get("/getMemes", memesController.getMemes)

router.post("/createMemes", memesController.createMemes)



module.exports = router;