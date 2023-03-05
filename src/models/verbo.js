const { Schema, model } = require("mongoose");

const verboSchema = new Schema({
  palabra: { type: String, unique: true },
});

module.exports = model("Verbo", verboSchema);