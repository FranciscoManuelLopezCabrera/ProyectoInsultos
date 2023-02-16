const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, unique: true, require: true },
  email: { type: String, unique: true, require: true },
});

module.exports = model("User", userSchema);