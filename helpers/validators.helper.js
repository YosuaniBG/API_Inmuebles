const { body, param } = require("express-validator");

const bodyValidator = [
  body("piso")
    .notEmpty()
    .withMessage("Debe incluir el Número de piso del Inmueble")
    .isInt()
    .withMessage("Debe ser un número"),
  body("letra").notEmpty().withMessage("Debe incluir la Letra del Inmueble"),
  body("extension")
    .notEmpty()
    .withMessage("Debe incluir la Extensión del Inmueble")
    .isInt()
    .withMessage("Debe ser un número"),
  body("habitaciones")
    .notEmpty()
    .withMessage("Debe incluir el Número de habitaciones del Inmueble")
    .isInt()
    .withMessage("Debe ser un número"),
  body("alquilado")
    .notEmpty()
    .withMessage("Debe incluir si el Inmueble está alquilado o no"),
  body("propietario")
    .notEmpty()
    .withMessage("Debe incluir el Propietario del Inmueble"),
  body("email").isEmail().withMessage("El Correo electrónico no es válido"),
];

const bodyValidatorForUpdate = [
  body("piso")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("Debe incluir el Número de piso del Inmueble")
    .isInt()
    .withMessage("Debe ser un número"),
  body("letra")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("Debe incluir la Letra del Inmueble"),
  body("extension")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("Debe incluir la Extensión del Inmueble")
    .isInt()
    .withMessage("Debe ser un número"),
  body("habitaciones")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("Debe incluir el Número de habitaciones del Inmueble")
    .isInt()
    .withMessage("Debe ser un número"),
  body("alquilado")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("Debe incluir si el Inmueble está alquilado o no"),
  body("propietario")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("Debe incluir el Propietario del Inmueble"),
  body("email")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("Debe incluir el Correo electrónico del Propietario")
    .isEmail()
    .withMessage("El Correo electrónico no es válido"),
];

const paramsValidator = [
  param("idInmueble")
    .notEmpty()
    .withMessage("Debe incluir el ID del Inmueble"),
];

module.exports = { bodyValidator, bodyValidatorForUpdate, paramsValidator };
