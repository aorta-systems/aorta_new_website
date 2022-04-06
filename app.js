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


var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': req.url.endsWith('html') && req.url !== '/' ? 'text/html' : 'application/javascript'});

    if (req.url === '/') {
        res.write(html);
        res.end();
    } else {
        fs.readFile(path.join(__dirname, req.url), function (err,data){
            if (err) {
              res.writeHead(404);
              res.end(JSON.stringify(err));
              return;
            }
            res.end(data);
          });
    }
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
