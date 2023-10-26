const mail = require("nodemailer");
const trans = mail.createTransport({
  service: "Gmail",
  auth: {
    user: "your_email@gmail.com",
    pass: "your password",
  },
});

const mailOp = {
  from: "",
  to: "your_email@gmail.com",
  object: "email",
  text: "your email has just arrived !",
};

trans.sendMail(mailOp, (error, info) => {
  error
    ? console.error("failed to send the email ! ", error)
    : console.log("email sent successfully", info.response);
});
