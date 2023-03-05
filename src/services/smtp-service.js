const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { logger } = require('../utils');

let transporter;

function setConfig(smtpConfig) {
  const {
    clientId, clientSecret, authUrl, user, accessToken, refreshToken,
  } = smtpConfig;
  const { OAuth2 } = google.auth;

  const oauth2Client = new OAuth2(
    clientId,
    clientSecret,
    authUrl,
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
      type: 'OAuth2',
      user: 'test@gmail.com',
      accessToken: 'ya29.a0AVvZVsrZ8tKPoENdFFTwyukJ0NUw2N01OvuneQTOMBuDxee-oCqg4dfregPcxPNU_-d2s9cRRa_MCKPqgzXTHG5Y4qVKZJuko97ybqYnSOC0SM06HTHixJgwcPSHHwZjeJQc6zK82wi0dRdjvT60PRlNUe1VaCgYKAd8SARESFQGbdwaIWO1odbjeQnxsBkaq2qvOtQ0163',
      clientId: '764835157465-d7531dt1hpkfr7500irmq31v979h0ohl.apps.googleusercontent.com',
      clientSecret: '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',
      refreshToken: '1//04AUFj4F0BLF6CgYIARAAGAQSNwF-L9IrMp4lbOs0lpByCmu8bljzqBk9P4nEx4QVl_L9Qdn6XpnoPOOsLbp_p4tX3g3JwqwA8S4',
    },
    // tls: {
    //   rejectUnauthorized: false,
    // },
  });
}

async function sendMail(content) {
  const { to, subject, text } = content;

  const info = await transporter.sendMail({
    from: 'test@gmail.com',
    to: to || 'franciscomanuel.lopez@adaits.es',
    subject,
    text,
  });

  logger.info(`Message sent: ${info.messageId}`);

  return info;
}

module.exports = {
  setConfig,
  sendMail,
};