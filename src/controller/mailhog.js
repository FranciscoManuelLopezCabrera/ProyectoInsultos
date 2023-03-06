const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "your-email@gmail.com", // replace with your email
    pass: "your-password", // replace with your password
  },
});

// send mail with defined transport object
let mailOptions = {
  from: "your-email@gmail.com", // replace with your email
  to: "recipient-email@example.com", // replace with recipient email
  subject: "Test email",
  text: "This is a test email sent using Nodemailer",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});