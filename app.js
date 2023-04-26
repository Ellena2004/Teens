var express = require("express");
const path = require('path');


const app = express();
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get("/home", function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get("/about", function(req, res){
    res.sendFile(path.join(__dirname+'/about.html'));
});

app.get("/blog", function(req, res){
    res.sendFile(path.join(__dirname+'/blog.html'));
});

app.get("/donate", function(req, res){
    res.sendFile(path.join(__dirname+'/donate.html'));
});

app.get("/blog-single", function(req, res){
    res.sendFile(path.join(__dirname+'/blog-single.html'));
});

app.get("/contact", function(req, res){
    res.sendFile(path.join(__dirname+'/contact.html'));
});

app.get("/event", function(req, res){
    res.sendFile(path.join(__dirname+'/event.html'));
});

app.get("/gallery", function(req, res){
    res.sendFile(path.join(__dirname+'/gallery.html'));
});

app.get("/Programs", function(req, res){
    res.sendFile(path.join(__dirname+'/programs.html'));
});




let  port = process.env.PORT;
if (port ==null || port == ""){
    port = 3000;
}

app.listen(port, function(){
    console.log("server has started successfully");
})