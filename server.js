var http = require("http");
var express = require("express");
var app = express();

//setup the view engine(Jade)
app.set("view engine","jade");
app.get("/",function(req,res){
    res.render("jade/index",{title:"Express + Jade"});
});

app.get("/api/users",function(req,res){
    res.set("Content-Type","application/json");
    res.send({name:"Wilson",isValid:true,group:"Admin"});
});

var server = http.createServer(app);
server.listen(3000);