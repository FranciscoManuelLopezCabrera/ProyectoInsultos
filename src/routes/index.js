const express = require('express')

const router  = express.Router();

const users = require("./users");

const sustantivo = require("./sustantivos");

const verbo = require("./verbos");

router.use("/users", users);

module.exports = router;