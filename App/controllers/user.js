const User = require("../models/user");
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const user = await User.create(req.body);
        res.send(user);
    } catch (error) {
        res.send(error);
    }
        
}

exports.login = (req, res) => {
  res.send("You are login");
};




