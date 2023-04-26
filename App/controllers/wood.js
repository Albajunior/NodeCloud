const { Wood } = require("../models");

exports.readAll = async (req, res) => {
  try {
    console.log(req.body);
    const wood = await Wood.findAll();
    res.status(200).json(wood);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erreur: "Erreur lors de la récupération" });
  }
};

exports.findByHardness = async (req, res) => {
  try {
    console.log(req.body);

    const wood = await Wood.findAll({
      where: {
        hardness: req.params.hardness,
      },
    });
    res.status(200).json(wood);
  } catch (error) {
    console.error(err);
    res.status(500).json({ erreur: "Erreur lors de la récupération" });
  }
};

exports.createWood = async (req, res) => {

  try {
    var pathname = null
    if(req.file){
      pathname = `${req.protocol}://${req.get("host")}/uploads/${
        req.file.filename
      }`;
    }
    console.log(req.body);
    const woodbody = {
      ...JSON.parse(req.body.datas), 
      image: pathname,
    };
    const wood = await Wood.create(woodbody);

    res.status(200).json(wood);
  } catch (error) {
    console.error(err);
    res.status(500).json({ erreur: "Erreur " });
  }
};
