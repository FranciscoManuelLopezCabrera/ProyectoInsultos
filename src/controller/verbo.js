const slurService = require("../services/mongodbServices/verbo");

// CREAR INSULTO SUSTANTIVO
async function createSlurVb(req, res, next) {
  try {
    const createdSlurVb = await slurService.createSlurVb(req.body);
    res.status(201).send(createdSlurVb);
  } catch (error) {
    next(error);
  }
}

// EXPORTS
module.exports = { createSlurVb };