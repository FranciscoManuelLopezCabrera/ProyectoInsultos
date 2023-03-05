const { createSlurSus } = require("../controller/sustantivo");

const { Router } = require("express");

const router = Router();

router.post("", createSlurSus);

module.exports = router;