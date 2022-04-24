const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel")

const authenticate = function (req, res, next) {
    if (!req.headers["x-auth-token"])
        return res.send({ status: false, msg: "token must be present" });

    next()
}
 
const authorise = function (req, res, next) {
    let token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, "functionup-uranium")
    let toBeUpdatedUserId = req.params.userId;
    let loggedInUserId = decodedToken.userId;
    if (loggedInUserId != toBeUpdatedUserId)
        return res.send({ status: false, msg: "You're not authorised to do this task" });

    next()
}

module.exports = {
    authenticate: authenticate,
    authorise: authorise
}
