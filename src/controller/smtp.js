/*
const smtpService = require("../service/smtp-service");

async function createMail(req, res, next) {
  try {
    const { nombre, contenido } = req.body;
    const emailId = await smtpService.sendMail(req.body);
    res.status(200).send({ id: emailId });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createMail,
};
*/