const { Wood } = require("../models");
//const pathname = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

exports.readAll = async (req, res) => {
  try {
    console.log(req.body);
    const wood = await Wood.findAll();
    res.status(200).json(wood);
  } catch (error) {
    console.error(error);
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
    res.status(200).json(wood);
  } catch (error) {
    console.error(err);
    res.status(500).json({ erreur: 'Erreur lors de la récupération' });
  }

};  

exports.createWood = async (req, res) => {
  try {
    console.log(req.body);
    //req.body.password = await bcrypt.hash(req.body.password, 10);
    const wood = await Wood.create(req.body);
    res.status(201).json(w);
    //res.status(201).json.parse(req.body.datas)
  } catch (error) {
    console.error(err);
    res.status(500).json({ erreur: "Erreur lors de la récupération" });
  }
};