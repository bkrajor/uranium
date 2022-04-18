const express = require('express');
const router = express.Router();

const batchController= require("../controllers/batchController")
const developerModel=require("../controllers/developerControlller")

router.post("/createBatch", batchController.createBatch )

router.post("/createDeveloper", developerModel.createDeveloper )

router.get("/scholarshipDevelopers", developerModel.scholarshipDevelopers )

router.get("/developers", developerModel.developers )


module.exports = router;