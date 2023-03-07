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
      //TOKEN ACCESO, HAY QUE REFRESCARLO
      accessToken:
        "ya29.a0AVvZVsoy9k2o2sVgTbzoalefpjXnMpcEWDGHW_qsxMpv7WI8DIyLqhcL1_6as213bcCHLzq33ehLzzNwTKhzBhDtBHmO0mX3khw8BizTYQycwApx4_TEIswgLdjY-Da9lX4LyF5XecQN4AaZxzjpv1VDjT5REXgaCgYKAVYSARASFQGbdwaIVAI_gz5KaGKtW5WeLzIwpg0166",
      clientId:
        "377203487212-gfcg8k75h89fvrigc7fio5obml6dr6a0.apps.googleusercontent.com",
      clientSecret: "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",
      // TOKEN DE REFRESH, HAY QUE REFRESCARLO
      refreshToken:
        "1//04m_MTSdzb6eJCgYIARAAGAQSNwF-L9IrCiKRbAQVXVD3hya5KccZTQDpcrQ_2u0rojn6wygYW7oJ_s8yMPcM2iJ5OfAxaqSDJN0",
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

  logger.info(`Insulto enviado: ${info.messageId}`);

  return info;
}

module.exports = {
  setConfig,
  sendMail,
};
