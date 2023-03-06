const express = require("express");

const router = express.Router();

const users = require("./users");

const sustantivo = require("./sustantivos");

const verbo = require("./verbos");

const insulto = require("./insulto");

const correo = require("./smtp");

router.use("/sustantivos", sustantivo);

router.use("/verbos", verbo);

router.use("/users", users);

router.use("/insultos", insulto);

router.use("/correos", correo);

module.exports = router;
