const { createSlurVb } = require("../controller/verbo");

const { Router } = require("express");

const router = Router();

router.post("", createSlurVb);

module.exports = router;