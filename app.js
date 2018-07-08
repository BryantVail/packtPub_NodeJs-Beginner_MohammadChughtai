//app.js

const express       = require("express");
const app           = express();

app.get("/", function(req,res){
    response.send("<h1 style=\"text-align:center\" >Hey Friends, Welcome to my app</h1>" );
});

app.listen(3000, function(error){
    if(error){
        console.log("some error occurred");
    }else{
        console.log("server running on port 3000");
    }
});








