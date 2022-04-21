const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

// create user
const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ status: true, msg: savedData });
};


// login user and generate jwt
const loginUser = async function (req, res) {
  let emailId = req.body.emailId;
  let password = req.body.password;
  let user = await userModel.findOne({ emailId: emailId, password: password });
  // check user id and passward
  if (!user)
    return res.send({ status: false, msg: "username or the password is not corrct", });
  // create jwt
  let token = jwt.sign({ userId: user._id.toString() }, "functionup-uranium");
  res.send({ status: true, JWT: token });
};

// get userdata
const getUserData = async function (req, res) {

  // verify user id
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId)
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails })
};


// update user
const updatedUser = async function (req, res) {

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId)
  if (!userDetails)
    return res.send("No such user exists")

  // update user data
  let userData = req.body;
  let updatedUser = await userModel.updateOne({ _id: userId }, { $set: userData }, { new: true });
  res.send({ status: "updatedUser true", data: updatedUser });
};



const deletedUser = async function (req, res) {
  // delete user
  let userId = req.params.userId
  let deletedUser = await userModel.updateOne({ _id: userId }, { $set: { isDeleted: true } }, { new: true })
  res.send({ status: true, msg: deletedUser })
}

module.exports = {
  createUser: createUser,
  loginUser: loginUser,
  getUserData: getUserData,
  updatedUser: updatedUser,
  deletedUser: deletedUser
}
