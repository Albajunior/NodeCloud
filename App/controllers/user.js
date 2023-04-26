const { User } = require("../models");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    console.log(req.body);
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = await User.create(req.body);
    res.send(user);
    res.status(201)("User created");
  } catch (error) {
    console.error(err);
    res.status(500).json({ erreur: "Erreur lors de la récupération" });
  }
};

exports.login = (req, res) => {
  res.send("You are login");
};

// const generateToken = (user) => {
//   const payload = {
//     userId: user.id,
//     email: user.email,
//   };

//   const token = jwt.sign(payload, "votre_cle_secrete", { expiresIn: "1h" });
//   return token;
// };

// const comparePassword = async (password, hashedPassword) => {
//     try {
//       const match = await bcrypt.compare(password, hashedPassword);
//       return match;
//     } catch (error) {
//       throw new Error('Erreur lors de la comparaison des mots de passe');
//     }
//   };

exports.findOne = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.params.email,
      },
    });
    res.json(user).status(200);

    if (user === null) {
      console.log("Not found!");
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    } else {

    //   const match = await bcrypt.comparePassword("123456", user.password);

    //   if (match) {
    //     console.log("login successful");

    //     // const token = generateToken(user);
    //     // return res.json({ token, user });
    //   }
    }
    console.log(user.passwordhash); 
  } catch (error) {
    //console.error(err);
    res.status(500).json({ erreur: "Erreur lors de la récupération" });
  }
};
