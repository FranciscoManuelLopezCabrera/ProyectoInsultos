require("dotenv").config();

const mongodb = {
  user: process.env.DATABASE_USER,
  pass: process.env.DATABASE_PASS,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  dbName: process.env.DATABASE_NAME,
};

const smtp = {
  user: process.env.SMTP_USER,
  password: process.env.SMTP_PASSWORD,
  clientSecret: process.env.GMAIL_CLIENT_SECRET,
  clientId: process.env.GMAIL_CLIENT_ID,
  accessToken: process.env.GMAIL_ACCESS_TOKEN,
  authUrl: "https://developers.google.com/oauthplayground",
};

const config = {
  app: {
    port: process.env.PORT,
  },
  mongodb,
  smtp,
};

module.exports = config;