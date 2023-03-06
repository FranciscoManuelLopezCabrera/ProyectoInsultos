const { createMail } = require("../controller/smtp");

const { Router } = require("express");

const router = Router();

router.post("", createMail);

module.exports = router;
