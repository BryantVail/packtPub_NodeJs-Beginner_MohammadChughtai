//app.js
const http      = require("http");
const fs        = require("file-system");
const keys      = require("./config/keys");

http.createServer(function(req, res){
    try{
        let file =fs.readFileSync("./movies/"+req["url"]+".txt","utf8");//./babydriver.txt
        res.write(file);
    }catch(err){
        console.log(err);
        res.write("error 404, file not found");
    }
    
    res.end();
}).listen(keys.server.port);







