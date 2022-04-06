var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('index.html');

    // function sendFile(filename, contentType, callback) {
    //     fs.readFile(filename, function(error, data) {
    //         if (error) {
    //             console.log(error);
    //             res.writeHead(404, { 'Content-Type': 'text/plain' });
    //             res.write('Something does not work well');
    //         } else {
    //             res.writeHead(200, { 'Content-Type': contentType });
    //             res.write(data);
    //         }
    //         res.end();
    //         if (callback) {
    //             callback(error);
    //         }
    //     });
    // }
    
    // const server = http.createServer(function(req, res) {
    //     if (req.url === "/index.js") {
    //         sendFile('index.js', 'text/javascript');
    //     } else if (req.url === "/") {
    //         sendFile('index.html', 'text/html');
    //     } else {
    //         res.statusCode = 404;
    //         res.end();
    //     }
    // })
    
    // server.listen(port);
    // console.log('Server running at http://127.0.0.1:' + port + '/');


// var log = function(entry) {
//     fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
// };


var server = http.createServer(function (request, response) {

    console.log('request ', request.url);

    var filePath = '.' + request.url;
    if (filePath == './') {
        filePath = './index.html';
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
        '.html': 'text/html',
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

    var contentType = mimeTypes[extname] || 'application/octet-stream';

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
    // if (req.url === '/') {
    //     res.writeHead(200);
    //     res.write(html);
    //     res.end();
    // } else if (req.url.endsWith('.js')) {

    //     // html = fs.readFileSync('index.html');
    //     fs.readFile(path.join(__dirname, req.url), function (err,data){
    //         if (err) {
    //           res.writeHead(404);
    //           res.end(JSON.stringify(err));
    //           return;
    //         }
    //         res.writeHead(200);
    //         res.setHeader("Content-Type", "application/javascript");
    //         res.end(data);
    //     });
    // }
    // fs.readFile(path.join(__dirname, req.url), function (err,data){
    //     // if (err) {
    //     //     res.writeHead(404);
    //     //     res.end(JSON.stringify(err));
    //     //     return;
    //     // }
 
    // });
    // if (req.method === 'POST') {
    //     var body = '';

    //     req.on('data', function(chunk) {
    //         body += chunk;
    //     });

    //     req.on('end', function() {
    //         if (req.url === '/') {
    //             log('Received message: ' + body);
    //         } else if (req.url = '/scheduled') {
    //             log('Received task ' + req.headers['x-aws-sqsd-taskname'] + ' scheduled at ' + req.headers['x-aws-sqsd-scheduled-at']);
    //         }

    //         res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
    //         res.end();
    //     });
    // } else {
    //     res.writeHead(200, { 'Content-Type': 'text/javascript'});
    //     res.write(html);
    //     res.end();
    // }
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// // Put a friendly message on the terminal
// console.log('Server running at http://127.0.0.1:' + port + '/');
