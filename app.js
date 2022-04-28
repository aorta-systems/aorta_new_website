

var port = 80;
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const http = require('http');

const app = express()
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send("<html><div style='text-align:center;margin-top:20%'><h1>Welcome to My Page </h1></div></html>");
});

const httpServer = http.createServer(app);
httpServer.listen(port, () => {
  console.log(`API is now live on ${port}`);
});










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