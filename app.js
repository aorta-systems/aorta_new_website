
const express = require("express");
const bodyParser = require("body-parser")
  
// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));
  
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
  
app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
    
  var result = num1 + num2 ;
    
  res.send("Addition - " + result);
});
  
app.listen(3000, function(){
  console.log("server is running on port 3000");
})







// var port = process.env.PORT || 3000;
// var http = require('http');
// var fs = require('fs');
// var html = fs.readFileSync('index.html');
// var path = require('path');

// var server = http.createServer(function (request, response) {
//     var filePath = '.' + request.url;
//     if (filePath == './') {
//         filePath = './index.html';
//     }

//     var extname = String(path.extname(filePath)).toLowerCase();
//     var mimeTypes = {
//         '.js': 'text/javascript',
//         '.css': 'text/css',
//         '.json': 'application/json',
//         '.png': 'image/png',
//         '.jpg': 'image/jpg',
//         '.gif': 'image/gif',
//         '.svg': 'image/svg+xml',
//         '.wav': 'audio/wav',
//         '.mp4': 'video/mp4',
//         '.woff': 'application/font-woff',
//         '.ttf': 'application/font-ttf',
//         '.eot': 'application/vnd.ms-fontobject',
//         '.otf': 'application/font-otf',
//         '.wasm': 'application/wasm'
//     };

//     var contentType = mimeTypes[extname] || undefined;

//     if (contentType == undefined) {
//         filePath = './index.html';
//         contentType = 'text/html';
//     }

//     fs.readFile(filePath, function(error, content) {
//         if (error) {
//             if(error.code == 'ENOENT') {
//                 fs.readFile('./404.html', function(error, content) {
//                     response.writeHead(404, { 'Content-Type': 'text/html' });
//                     response.end(content, 'utf-8');
//                 });
//             }
//             else {
//                 response.writeHead(500);
//                 response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
//             }
//         }
//         else {
//             response.writeHead(200, { 'Content-Type': contentType });
//             response.end(content, 'utf-8');
//         }
//     });
// });

// // Listen on port 3000, IP defaults to 127.0.0.1
// server.listen(port);