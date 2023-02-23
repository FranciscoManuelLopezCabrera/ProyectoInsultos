require('dotenv').config();

const db = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  name: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  pass: process.env.DATABASE_PASS,
  atlas: process.env.NODE_ENV === 'production' ? '+srv' : '',
};

const mongodb={
  // uri: `mongodb${db.atlas}://${db.host}/${db.name}?retryWrites=true&w=majority`,
  uri: `mongodb+srv://${db.user}:${db.pass}@${db.host}/?retryWrites=true&w=majority`,
  options: {
    user: db.user,
    pass: db.pass,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
};

const smtp = {
  user: process.env.SMTP_USER,
  password: process.env.SMTP_PASSWORD,
  clientSecret: process.env.GMAIL_CLIENT_SECRET,
  clientId: process.env.GMAIL_CLIENT_ID,
  accessToken: process.env.GMAIL_ACCESS_TOKEN,
  authUrl: 'https://developers.google.com/oauthplayground',
};

const config = {
  app: {
    port: process.env.PORT,
  },
  mongodb, smtp
};

module.exports = config;