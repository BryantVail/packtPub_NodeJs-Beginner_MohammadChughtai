//app.js
const http      = require("http");
const fs        = require("file-system");
const keys      = require("./config/keys");

http.createServer(function(request, response){
    response.write(request["url"]);
    response.end();
}).listen(keys.server.port);







