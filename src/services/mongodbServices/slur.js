const { Slur } = require("../../models");

// GENERAR INSULTO VERBO

async function createSlurVb(body) {
  const createdSlurVb = await new Slur(body).save();
  return createdSlurVb;
}

// GENERAR INSULTO SUSTANTIVO

async function createSlurSus(body) {
    const createdSlurSus = await new Slur(body).save();
    return createdSlurSus;
  }

module.exports = { createSlurVb, createSlurSus };