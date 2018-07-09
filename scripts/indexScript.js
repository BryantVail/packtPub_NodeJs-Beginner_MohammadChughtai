//indexScript.js

window.onload = function(){
    console.log("dom loaded");
    fetch("/status").then(function(res){
        res.json().then(function(data){
            console.log(data);
            document.getElementById("my-name").innerHTML =data["name"];
            document.getElementById("my-status").innerHTML =data["status"];
        }).catch(function(err){
            if(err){
                console.log(err); 
            }
        });
    }).catch(function(err){
        if(err){
            console.log(err);
        }
    });
};







