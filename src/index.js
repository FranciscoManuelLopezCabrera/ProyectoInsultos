const express = require("express");
const server = require("./app");
const config = require("./config");
const { logger } = require("./utils");
const { port } = config;

server.listen(port, () => {
  logger.info(`Escuchando en: ${port}`);
});