const express = require("express");
var port = process.env.PORT || 3000;
// const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post('/sendmail', (req, res) => {
    console.log("request came");
    let email = req.body;

    // res.send(email);
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
        user: "aleksei@aortasystems.com",
        pass: "Aa461033"
      }
    });

    let mailOptions = {
      from: '"Aorta SITE"<aleksei@aortasystems.com>', // sender address
      to: "aleksei@aortasystems.com", // list of receivers
      subject: "AORTA SITE MESSAGE", // Subject line
      html: `
        <p><strong>Name: </strong> ${email.name}</p>
        <p><strong>Email: </strong> ${email.email}</p>
        <p><strong>Phone: </strong> ${email.phone}</p>
        <h3>Message</h3>
        <p>${email.message}</p>
      `
    };
    let info = await transporter.sendMail(mailOptions);
  
    callback(info);
}
