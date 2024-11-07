var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('home.html', function(err, data) {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.write('Error reading file');
            return res.end();
        }
        
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
