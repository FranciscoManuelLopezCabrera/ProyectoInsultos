const smtpLoader = require("../services/smtp-service");

module.exports = (config) => smtpLoader.setConfig(config);