const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")

// create user
const createUser = async function (req, res) {
  let savedData = await userModel.create(req.body)
  res.send({ status: true, msg: savedData })
}


// login user and generate jwt
const loginUser = async function (req, res) {
  let user = await userModel.findOne({ emailId: req.body.emailId, password: req.body.password })
  if (!user) return res.send({ status: false, msg: "username or the password is not correct", })

  let token = jwt.sign({ userId: user._id.toString() }, "functionup-uranium")
  res.send({ status: true, JWT: token })
}

// get userdata
const getUserData = async function (req, res) {
  let userDetails = await userModel.findById(req.params.userId)
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" })

  res.send({ status: true, data: userDetails })
}


// update user
const updatedUser = async function (req, res) {
  let userDetails = await userModel.findById(req.params.userId)
  if (!userDetails)
    return res.send("No such user exists")

  let userData = req.body
  let updatedUser = await userModel.updateOne({ _id: req.params.userId }, { $set: userData }, { new: true })
  res.send({ status: "updatedUser true", data: updatedUser })
}


// delete user
const deletedUser = async function (req, res) {
  let userDetails = await userModel.findById(req.params.userId)
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" })

  let deletedUser = await userModel.updateOne({ _id: req.params.userId }, { $set: { isDeleted: true } }, { new: true })
  res.send({ status: true, msg: deletedUser })
}

//
const postMessage = async function (req, res) {
  let message = req.body.message
  let user = await userModel.findById(req.params.userId)
  if (!user) return res.send({ status: false, msg: 'No such user exists' })

  let post = user.posts
  post.push(message)
  let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: post }, { new: true })
  return res.send({ status: true, data: updatedUser })
}

module.exports = {
  createUser: createUser,
  loginUser: loginUser,
  getUserData: getUserData,
  updatedUser: updatedUser,
  deletedUser: deletedUser,
  postMessage: postMessage
}
