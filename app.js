//app.js
const serverConfig  = require("./config/keys"); 
const express       = require("express");
const app           = express();
const messages      = require("./messages");
const fs            = require("fs");
const bodyParser    = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname+"/"));

app.get("/", function(req,res){
    fs.readFile(__dirname+"/index.html",function(err, data){
        if(!err){
            res.write(data);

        }
        res.end();
    }).catch(function(err){
        console.log(err);
    });
});

app.get("/status", function(req,res){
    fs.readFile(__dirname+"/posts.json", function(err, data){
        if(!err){
            res.send(JSON.parse(data));
        }else{
            console.log(err);
        }
    });
});

app.post("/status/new", function(req,res){
    let status = JSON.stringify(
        {
            name:req["body"]["name"],
            status:req["body"]["status"]
        }
    );

    fs.writeFile(__dirname + "/posts.json",
    status,
    function(err){
            console.log(err);
        }
    );
});

app.listen(serverConfig.server.port, function(err){
    if(err){
        console.log("err: "+err);
    }else{
        console.log("listening on port: " + serverConfig.server.port);
    }
});








