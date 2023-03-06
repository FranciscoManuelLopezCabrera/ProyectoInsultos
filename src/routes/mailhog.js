const { createMail } = require("../controller/mailhog");

const { Router } = require("express");

const router = Router();

router.post("", createMail);

module.exports = router;