const app = require("./app");

const loaders = require("./loaders");
const config = require("./config");
const { logger } = require("./utils");

const { port } = config.app;

app.listen(port, () => {
  logger.info(`👂Escuchando en: ${port}`);
});