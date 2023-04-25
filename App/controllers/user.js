const { User } = require("../models");
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
    try {
        console.log(req.body);
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const user = await User.create(req.body);
        res.send(user);
        res.status(201)( 'User created' )
    } catch (error) {
        console.error(err);
        res.status(500).json({ erreur: 'Erreur lors de la récupération' });
    }
        
}

exports.login = (req, res) => {
  res.send("You are login");
};




