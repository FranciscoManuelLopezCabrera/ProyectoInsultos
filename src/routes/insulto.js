const { createInsulto } = require("../controller/insulto");

const { Router } = require("express");

const router = Router();

router.post("", createInsulto);

module.exports = router;