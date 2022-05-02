const express = require("express");
var port = process.env.PORT || 3000;
// const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post('/sendmail', (req, res) => {
    console.log("sendmail func");
    let email = req.body;

    sendMail(email, info => {
        console.log("email");
        res.send(info);
    });
});

app.get('/*', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(port, () => {
    console.log("The server started on port:" + port);
});

async function sendMail(email, callback) {
    let transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: "sales@aortasystems.com",
        pass: "AortaSystems2022!"
      }
    });

    let mailOptions = {
      from: '"Aorta SITE"<sales@aortasystems.com>', // sender address
      to: "info@aortasystems.com", // info@aortasystems.com
      subject: "AORTA SITE MESSAGE", // Subject line
      html: `
        <p><strong>Name:&nbsp;</strong> ${email.name}</p>
        <p><strong>Email:&nbsp;</strong> ${email.email}</p>
        <p><strong>Phone:&nbsp;</strong> ${email.phone}</p>
        <div><strong>Message:&nbsp;</strong>${email.message}</div>
      `
    };
    let info = await transporter.sendMail(mailOptions);
  
    callback(info);
}
