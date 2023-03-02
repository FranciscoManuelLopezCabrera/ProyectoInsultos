const express = require("express");
const swaggerSpec = require("../openapi");
const routes = require("../routes");
const swaggerUI = require("swagger-ui-express");

module.exports = (server) => {
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  server.use(routes);
  server.use((req, res) => res.status(404).send({ message: "Not Found" }));
};
