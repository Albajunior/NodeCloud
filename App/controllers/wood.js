const { Wood } = require("../models");

exports.readAll = async (req, res) => {
  try {
    console.log(req.body);
    const wood = await Wood.findAll();
    res.status(200).json(wood);
  } catch (error) {
    console.error(err);
    res.status(500).json({ erreur: 'Erreur lors de la récupération' });
  }

};

exports.findByHardness = async (req, res) => {
  try {
    console.log(req.body);
    
    const wood = await Wood.findAll({
      where: {
        hardness: req.params.hardness
      }
    });
    res.json(wood).status(200);
  } catch (error) {
    console.error(err);
    res.status(500).json({ erreur: 'Erreur lors de la récupération' });
  }

};  