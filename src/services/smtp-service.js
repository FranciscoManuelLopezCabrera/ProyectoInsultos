const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { logger } = require("../utils");

let transporter;

function setConfig(smtpConfig) {
  const { clientId, clientSecret, authUrl, user, accessToken, refreshToken } =
    smtpConfig;
  const { OAuth2 } = google.auth;

  const oauth2Client = new OAuth2(clientId, clientSecret, authUrl);

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      type: "OAuth2",
      user: "francislocabrera@gmail.com",
      accessToken:
        "ya29.a0AVvZVsp4ILYFheOJvXVJ0qaVsoi9YoddgOVNbxvIBLkFB-_4jez6akhXza1Tt_5FEJN5-FK3BJ7YFW4BFLepkra7SEy5sF_b_Vkot81RtohQyS5XhGC-5a9zsTMromxA_TVqSB450gU23hV5vFDU8MLsqFZdaCgYKAWISARASFQGbdwaIbgxTKDWFawZX7T2YkhhgDQ0163",
      clientId:
        "377203487212-gfcg8k75h89fvrigc7fio5obml6dr6a0.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken:
        "1//04dgrUcFpw1GwCgYIARAAGAQSNwF-L9IrRDmu1uQR3KfM3KAMrnj2kLvcutHNsH3CXvusq3ux38WboN9qWnJLGBqeqoEXFqGkd8g",
    },
  });
}

async function sendMail(content) {
  
  const verbos = ["pellizca ", "sopla ", "lame ", "huele ", "escupe ", "masca ", "besa ", "pisa ", "atrae "];

  const sustantivo = ["culos", "viejas", "pitos", "mocos", "pedos", "caca", "cristales"];

  const verboRandom = verbos[Math.floor(Math.random() * verbos.length)];
  const sustantivoRandom = sustantivo[Math.floor(Math.random() * sustantivo.length)];

  const insulto = verboRandom + "" + sustantivoRandom;

  const text =  insulto;

  const { to } = content;

  const info = await transporter.sendMail({
    from: "francislocabrera@gmail.com",
    to: to || "franciscomanuel.lopez@adaits.es",
    subject: "Correo muy importante para ti",
    text,
  });

  logger.info(`Message sent: ${info.messageId}`);

  return info;
}

module.exports = {
  setConfig,
  sendMail,
};
