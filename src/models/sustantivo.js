const { Schema, model } = require("mongoose");

const sustantivoSchema = new Schema({
  palabra: { type: String, unique: true },
});

module.exports = model("Sustantivo", sustantivoSchema);