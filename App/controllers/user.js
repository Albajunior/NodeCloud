const { User } = require("../models");
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
    try {
        console.log(req.body);
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




