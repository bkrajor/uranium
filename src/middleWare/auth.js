const jwt=require("jsonwebtoken")

let tokenVerification= (req,res,next)=>{
    let token = req.headers["x-Auth-Token"]
if (!token)
    token = req.headers["x-auth-token"]
if (!token)
    res.send({ status: false, msg: "token must be present in request header" })

    let decodedToken = jwt.verify(token, "functionup-uranium")
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" })

    next()
}

module.exports.tokenVerification=tokenVerification
