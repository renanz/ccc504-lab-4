var http = require("http");
var url = require('url');
var request = require('request');

options = {
    url: "https://api.github.com/users/:user",
    headers: {
        "User-Agent": "renanz"
    }
}

request.get(options).on('response', function(response) {
    console.log(response.statusCode);
    console.log(JSON.stringify(response));
})

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write(txt);
    res.end();
  }).listen(8080);