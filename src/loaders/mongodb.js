const mongoose = require("mongoose");
const { logger } = require("../utils");

module.exports = async (config) => {
  mongoose.set("strictQuery", false);
  const { uri } = config;
  await mongoose.connect(uri);
  logger.info("🐸 CONECTADO 🐸");
};
