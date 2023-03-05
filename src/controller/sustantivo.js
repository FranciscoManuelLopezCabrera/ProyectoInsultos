const slurService = require("../services/mongodbServices/sustantivo");

// CREAR INSULTO SUSTANTIVO
async function createSlurSus(req, res, next) {
  try {
    const createdSlurSus = await slurService.createSlurSus(req.body);
    res.status(201).send(createdSlurSus);
  } catch (error) {
    next(error);
  }
}

// EXPORTS
module.exports = { createSlurSus };