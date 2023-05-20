const router = require("express").Router();
const { check } = require("express-validator");

const Inmueble = require("../../models/inmueble.model");
const { bodyValidator, bodyValidatorForUpdate, paramsValidator } = require("../../helpers/validators.helper");
const { validate } = require("../../middlewares/validator");

// Ruta que nos devuelve en formato JSON todos los inmuebles contenidos dentro de la base de datos.
router.get("/", async (req, res) => {
  try {
    const result = await Inmueble.find();

    if (result.length === 0) {
      return res
        .status(404)
        .json({ Msg: "No hay datos para mostrar, la BD está vacía" });
    }

    res.status(200).json(result);

  } catch (error) {
    res.status(500).json({ Error: error.messsage });
  }
});

// Ruta que nos permite crear documentos dentro de la colección Inmuebles de nuestra base de datos.
router.post("/", bodyValidator, validate ,async (req, res) => {
    try {

      const result = await Inmueble.create(req.body);

      res.status(200).json(result);

    } catch (error) {
      res.status(500).json({ Error: error.messsage });
    }
  }
);

// Ruta que nos permite actualizar cualquier tipo de documento, recibiendo a través de la misma el documento a actualizar.
router.put("/:idInmueble?", paramsValidator, bodyValidatorForUpdate, validate, async (req, res) => {
    try {

      const result = await Inmueble.findByIdAndUpdate(
        req.params.idInmueble,
        req.body,
        { new: true }
        )

      if (!result) {
        return res
          .status(404)
          .json({ Msg: "No existe ningún inmueble con este ID" });
      }
        res.status(200).json(result);
  
    } catch (error) {
      res.status(500).json({ Error: error.messsage });
    }
  }
);

// Ruta que nos permite eliminar cualquier tipo de documento recibido a través de dicha ruta.
router.delete("/:idInmueble?", paramsValidator, validate, async (req, res) => {
  try {
    const result = await Inmueble.findByIdAndDelete(req.params.idInmueble);

    if (!result) {
      return res
        .status(404)
        .json({ Msg: "No existe ningún inmueble con este ID" });
    }

    res.status(200).json(result);

  } catch (error) {
    res.status(500).json({ Error: error.messsage });
  }
});

module.exports = router;
