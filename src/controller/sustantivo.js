const slurService = require("../services/mongodbServices/slur");
const Slur = require("../models/slur");

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