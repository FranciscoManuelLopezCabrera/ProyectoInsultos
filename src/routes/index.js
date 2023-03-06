const express = require("express");

const router = express.Router();

const users = require("./users");

const sustantivo = require("./sustantivos");

const verbo = require("./verbos");

router.use("/sustantivos", sustantivo);

router.use("/verbos", verbo);

router.use("/users", users);

// router.use("/mails", mail);

module.exports = router;