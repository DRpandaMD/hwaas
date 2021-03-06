// File Changes to app made my Michael Zarate
var http = require('http');
var ejs = require('ejs');
var fs = require('fs');
var os = require('os');

var server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  fs.readFile('index.html', (err, data) => {
    var result = ejs.render(data.toString(), {
        version:'0.2',
        host: os.hostname(),
        message: "A SaltStack Example for orchestration in AWS"
    });
    res.end(result);
  });
});

server.listen(80);