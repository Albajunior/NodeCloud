const { Wood } = require("../models");
const { Hardness } = require("../models");
const { Type } = require("../models");
const fs = require("fs");
exports.readAll = async (req, res) => {
  try {
    console.log(req.body);
    const wood = await Wood.findAll({
       include:[ 
        { model: Hardness, as: 'hardness'},
        { model: Type, as: 'type'},
    ]
       });
    console.log(JSON.stringify(wood, null, 2));
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
    var pathname = null;
    if (req.file) {
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

exports.deleteWood = async (req, res) => {
  try {
    const woodId = parseInt(req.params.id);
    const wood = await Wood.findByPk(woodId);

    if (wood === null) {
      return res.status(404).json({ error: "Wood non trouvé" });
    } else {
      if (wood.image) {
        const imagePath = `uploads/${wood.image.split("/").pop()}`;
        fs.unlink(imagePath, (error) => {
          if (error) {
            console.error(error);
          } else {
            console.log("Image deleted:", imagePath);
          }
        });
      }

      await wood.destroy();

      res.status(200).json({ message: `Le woods  ${woodId} a été supprimé.` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erreur: "Erreur lors de la récupération" });
  }
};

exports.updateWood = async (req, res) => {
  try {
    const woodId = req.params.id;
    const wood = await Wood.findByPk(woodId);
    
    if (!wood ) {
      return res.status(404).json({ error: "Wood non trouvé" });
    } else {
      let newwoodbody = {
        ...JSON.parse(req.body.datas),
      };

      if (req.file) {
        var pathname = `${req.protocol}://${req.get("host")}/uploads/${
          req.file.filoename
        }`;
        newwoodbody = {
          ...newwoodbody,
          image: pathname,
        };
        console.log(wood)
        //deleteimg
        if (wood.image) {
          const imagePath = `uploads/${wood.image.split("/").pop()}`;
          fs.unlink(imagePath, (error) => {
            if (error) {
              console.error(error);
            } else {
              console.log("Image deleted:", imagePath);
            }
          });
        }
      }

      await wood.update(
        newwoodbody 
      );
      res
        .status(200)
        .json({ message: `Le woods  ${woodId} a été modifie.`, wood});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erreur: "Erreur lors de la mise a jour" });
  }
};
