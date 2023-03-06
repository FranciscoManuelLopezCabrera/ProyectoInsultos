const insultoService = require("../services/mongodbServices/insulto");

// CREAR INSULTO
async function createInsulto(req, res, next) {
  try {
    const createInsulto = await insultoService.createInsulto(req.body);
    res.status(201).send(createInsulto);
  } catch (error) {
    next(error);
  }
}

// EXPORTS
module.exports = { createInsulto };