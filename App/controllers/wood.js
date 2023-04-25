const { Wood } = require("../models");

exports.readAll = async (req, res) => {
  try {
    console.log(req.body);
    const wood = await Wood.findAll();
    res.json(wood);
  } catch (error) {
    //res.send(error);
    console.error(err);
    res.status(500).json({ erreur: 'Erreur lors de la récupération' });
  }

};

exports.findByHardness = async (req, res) => {
  try {
    console.log(req.body);
    const wood = await Wood.findAll({
      where: {
        hardness: 'hard',
      }
    });
    res.json(wood);
  } catch (error) {
    //res.send(error);
    console.error(err);
    res.status(500).json({ erreur: 'Erreur lors de la récupération' });
  }

};  