var http = require("http");
var express = require("express");
var app = express();

//--------------Jade example----------------------------
// app.set("view engine","jade");//setup the view engine(Jade)
// app.get("/",function(req,res){
//     res.render("jade/index",{title:"Express + Jade"});
// });

//----------------EJS example----------------------------

app.set("view engine","ejs");//ejs view engine
app.get("/",function(req,res){
    res.render("ejs/index",{title:"Express + EJS"});
});
//-------------------------------------------------------

// app.get("/api/users",function(req,res){
//     res.set("Content-Type","application/json");
//     res.send({name:"Wilson",isValid:true,group:"Admin"});
// });
var server = http.createServer(app);
server.listen(3000);