var http = require('http');
var fs = require('fs'); //new

var server = http.createServer();
server.on('request', doRequest);
server.listen(1234);
console.log('Server running!');

// リクエストの処理
function doRequest(req, res) {
    fs.readFile('./02index.html', 'UTF-8', //new
        function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data); //new
            res.end();
        });
}
