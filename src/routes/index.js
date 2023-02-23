const express = require('express')

const router  = express.Router();

const users = require("./users");

const slurs = require("./slurs");

router.use("/users", users);

module.exports = router;