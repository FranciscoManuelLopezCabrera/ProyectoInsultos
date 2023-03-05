const { Sustantivo } = require("../../models");

// CREAR SUSTANTIVO

async function createSlurSus(body) {
  const createdSlurSus = await new Sustantivo(body).save();
  return createdSlurSus;
}

module.exports = { createSlurSus };