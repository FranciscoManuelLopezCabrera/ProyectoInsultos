const { Schema, model } = require("mongoose");

const insultoSchema = new Schema({
  insulto: { type: String },
});

module.exports = model("Insulto", insultoSchema);
