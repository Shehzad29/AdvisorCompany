const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
// const mongoose = require('mongoose')
// const Clients = mongoose.model("Client")
const Users = require("../models/userSchema");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  //authorization === Bearer avhvhjbdbhusuqusbchbccasaf
  if (!authorization) {
    return res.status(401).json({ error: "you must be logged in" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
    if (err) {
      return res
        .status(401)
        .json({ error: "you must be logged in & JWT is not verified yet" });
    }

    const { _id } = payload;
    Users.findById(_id).then((userdata) => {
      req.user = userdata;
      next();
    });
  });
};
