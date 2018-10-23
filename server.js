var http = require("http");
var url = require("url");
var request = require("request");

options = {
  url: "https://api.github.com/users/renanz",
  headers: {
    "User-Agent": "renanz"
  }
};

txt = "";

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    request.get(options).on("response", function(response) {
      res.write(JSON.stringify(response));
      res.end();
    });
  })
  .listen(8080);
