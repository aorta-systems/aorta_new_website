var express = require("express");

var port = process.env.PORT || 3000;
var http = require('http');
var fs = require('fs');
var html = fs.readFileSync('index.html');
var path = require('path');
// var nodemailer = require("nodemailer");


// async function sendMail(user, callback) {
//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//       host: "smtp.zoho.com",
//       port: 465,
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: "aleksei@aortasystems.com",
//         pass: "WBPxSEC7dmHP"
//       }
//     });


//     //WBPxSEC7dmHP

//     let mailOptions = {
//       from: '"AORTA SITE MESSAGE"<example.gimail.com>', // sender address
//       to: "aleksei@aortasystems.com", // list of receivers
//       subject: "AORTA SITE MESSAGE", // Subject line
//       html: `<h1>Hi</h1><br>
//       <h4>Thanks for joining us</h4>`
//     };
  
//     // send mail with defined transport object
//     let info = await transporter.sendMail(mailOptions);
  
//     callback(info);
// }

var server = http.createServer(function (request, response) {
    // if (request.method === 'POST' &&  request.url === '/sendEmail') {
    //     sendMail(email, info => {
    //         res.send(info);
    //     });
    // }



    var filePath = '.' + request.url;
    if (filePath == './') {
        filePath = './index.html';
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };
    
    var contentType = mimeTypes[extname] || undefined;

    if (contentType == undefined) {
        filePath = './index.html';
        contentType = 'text/html';
    }

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT') {
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(404, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);
