const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")

// create user
const createUser = async function (req, res) {
  try {
    let savedData = await userModel.create(req.body)
    res.status(201).send({ msg: savedData })
  } catch (err) {
    res.status(500).send({ Error: err.message })
  }
}


// login user and generate jwt
const loginUser = async function (req, res) {
  try {
    let user = await userModel.findOne({ emailId: req.body.emailId, password: req.body.password })
    if (!user) return res.status(400).send({ msg: "username or the password is not correct", })

    let token = jwt.sign({ userId: user._id.toString() }, "functionup-uranium")
    res.status(200).send({ JWT: token })
  } catch (err) {
    res.status(500).send({ Error: err.message })
  }

}

// get userdata
const getUserData = async function (req, res) {
  try {
    let userDetails = await userModel.findById(req.params.userId)
    if (!userDetails)
      return res.status(404).send({ msg: "No such user exists" })

    res.status(200).send({ data: userDetails })
  } catch (err) {
    res.status(500).send({ Error: err.message })
  }
}


// update user
const updatedUser = async function (req, res) {
  try {
    let userDetails = await userModel.findById(req.params.userId)
    if (!userDetails)
      return res.status(404).send("No such user exists")

    let userData = req.body
    let updatedUser = await userModel.updateOne({ _id: req.params.userId }, { $set: userData }, { new: true })
    res.status(200).send({ data: updatedUser })
  } catch (err) {
    res.status(500).send({ Error: err.message })
  }
}


// delete user
const deletedUser = async function (req, res) {
  try {
    let userDetails = await userModel.findById(req.params.userId)
    if (!userDetails)
      return res.status(404).send({ msg: "No such user exists" })

    let deletedUser = await userModel.updateOne({ _id: req.params.userId }, { $set: { isDeleted: true } }, { new: true })
    res.status(200).send({ msg: deletedUser })
  } catch (err) {
    res.status(500).send({ Error: err.message })
  }
}

//
const postMessage = async function (req, res) {
  try {
    let user = await userModel.findById(req.params.userId)
    if (!user) return res.status(404).send({ msg: 'No such user exists' })

    let message = req.body.message
    let post = user.posts
    post.push(message)
    let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: post }, { new: true })
    return res.status(200).send({ data: updatedUser })
  } catch (err) {
    res.status(500).send({ Error: err.message })
  }

}

module.exports = {
  createUser: createUser,
  loginUser: loginUser,
  getUserData: getUserData,
  updatedUser: updatedUser,
  deletedUser: deletedUser,
  postMessage: postMessage
}
