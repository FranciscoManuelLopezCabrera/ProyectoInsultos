const { Verbo } = require("../../models");

// CREAR VERBO

async function createSlurVb(body) {
  const createdSlurVb = await new Verbo(body).save();
  return createdSlurVb;
}

module.exports = { createSlurVb };