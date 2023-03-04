const { Schema, model } = require("mongoose");

const slurSchema = new Schema({
  palabra: { type: String, unique: true },
});

module.exports = model("Slur", slurSchema);