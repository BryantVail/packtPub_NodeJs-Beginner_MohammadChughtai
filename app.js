//app.js

const express       = require("express");
const app           = express();
const messages       = require("./messages");

console.log(messages["letters"]);



app.get("/", function(req,res){
    let allLetters = " ";
    for(let i = 0;i<messages["letters"].length; i++){
        allLetters += `${messages["letters"][i]}  <br>`; 
    }
    res.send(allLetters);
    // response.send("<h1 style=\"text-align:center\" >Hey Friends, Welcome to my app</h1>" );
});

app.get("/users/:name", function(req,res){
    res.send(req["params"]["name"]);

});

app.listen(3000, function(error){
    if(error){
        console.log("some error occurred");
    }else{
        console.log("server running on port 3000");
    }
});








