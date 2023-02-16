const { Schema, model } = require("mongoose");

const slurSchema = new Schema({
  verbo: { type: String, unique: true },
  sustantivo: { type: String, unique: true }
});

module.exports = model("Slur", slurSchema);