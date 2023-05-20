const { validationResult } = require("express-validator");


const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(500).json(errors.mapped());
    }
    next();
  };

module.exports = {validate};