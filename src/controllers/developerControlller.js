const batchModel = require("../models/batchModel")
const developerModel = require("../models/developerModel")

const createDeveloper = async function (req, res) {
    let developer = req.body
    let developerCreated = await developerModel.create(developer)
    res.send({ data: developerCreated })
}

const scholarshipDevelopers = async function (req, res) {
    let developers = await developerModel.find({ gender: "female", percentage:{$gte:75} }).select({name:1, _id:0})
    res.send({ msg: developers })
}

const developers= async function(req, res){
    const percentage= req.query.percentage;
    const name= req.query.name;
    const findBatch= await batchModel.findOne({name:name})
    const findNames= await developerModel.find({percentage:percentage,batch:findBatch._id})
    res.send({msg:findNames})
}


module.exports = {
    scholarshipDevelopers: scholarshipDevelopers,
    createDeveloper: createDeveloper,
    developers:developers
}
