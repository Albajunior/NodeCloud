const { User } = require("../models");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    console.log(req.body);
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    console.error(err);
    res.status(500).json({ erreur: "Erreur lors de la récupération" });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (user === null) {
      //console.log("Not found!");
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    } else {
      console.log(user.email);

      const match = await bcrypt.compare(req.body.password, user.password);
      //return match;
      if (match) {
        console.log("login successful");

        const payload = {
          userId: user.id,
          email: user.email,
        };

        const token = jwt.sign(payload, process.env.CLE, { expiresIn: "1h" });
        res.status(200).json({
          user: user,
          token: token,
        });
      } else {
        return res.status(404).json({ error: "Utilisateur incorrect" });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erreur: "Erreur lors de la récupération" });
  }
};
