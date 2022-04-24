const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel")

const authenticate = function (req, res, next) {
    try {
        if (!req.headers["x-auth-token"])
            return res.status(401).send({ status: false, msg: "token must be present" });

        next()
    } catch(err) {
        res.status(500).send({Error: err.message})
    }
}

const authorise = function (req, res, next) {
    try {
        let token = req.headers["x-auth-token"];
        let decodedToken = jwt.verify(token, "functionup-uranium")
        let toBeUpdatedUserId = req.params.userId;
        let loggedInUserId = decodedToken.userId;
        if (loggedInUserId != toBeUpdatedUserId)
            return res.status(401).send({ status: false, msg: "You're not authorised to do this task" });

        next()
    }catch(err){
        res.status(500).send({Error:err.message})
    }
    
}

module.exports = {
    authenticate: authenticate,
    authorise: authorise
}
